var Header = React.createClass({
    render: function () {
        var path = this.props.path ? '#business/'+this.props.path : '#';
      
        return (
            <header className="bar bar-nav">
                <a href={path} className={"icon icon-left-nav pull-left no-decoration" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var SearchBar = React.createClass({
   
    searchHandler: function() {
        var searchVal = this.refs.searchKey.getDOMNode().value;
        this.props.searchHandler(searchVal, this.props.category);
       
       
       
    },

    render: function () {
      
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" onChange={this.searchHandler}  defaultValue={this.props.searchKey}/>
            </div>

        );
    }
});

var EmployeeListItem = React.createClass({

    render: function () {
        return (
          
        <li  className={"page " + this.props.position}  className="table-view-cell media">
            <Container fluid={true}>
             <Row>
                <Column extraSmall={ 10 }
                    small={ 10 }
                    medium={ 10 }
                    large={ 10 }
                    largeOffset={ 10 } > 
                    <a   href={"#businessPage/" + this.props.business.id}>
                     
                    <img className="media-object small pull-left" src={"pics/" + this.props.business.Name + ".jpg" }/>
                    <b>{this.props.business.Name}</b>
                    <p>{this.props.business.address}</p>
                                       
                    </a> 
                </Column>

                <Column extraSmall={ 2 }
                    small={ 2 }
                    medium={ 2 }
                    large={ 2 }
                    largeOffset={ 2 } > 
                    <a  href={"tel:" + this.props.business.mobilePhone} ><img  className="media-object small fixPush"  src="pics/phone.png" />
                    </a>
                </Column>
             
            </Row>
        </Container>
        </li>
       
        );
    }
});

var EmployeeList = React.createClass({
    render: function () {
        var items = this.props.businesses.map(function (business) {
            return (
                <EmployeeListItem key={business.id} business={business} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});


var HomePage = React.createClass({
     getInitialState: function() {
        return {categories: []};
    },
   
    componentDidMount: function() {
        
        businessService.getCategories().done(function(result) {
            this.setState({categories: result});
        }.bind(this));
    },
    render: function () {

        
        return (
<div className={"page " + this.props.position}>
<Header text="Title" back="false"/>
    <div className="content">
        
                {this.state.categories.map(function(categories) {
                    return (
                      
                  
                   <a className='col-xs-4 col-sm-6 col-md-3 col-lg-4 grid-left'   href={"#business/" + categories.name} >
                    <img className="media-object big pull-left " src={"pics/" + categories.img}/> 
                    <p className='col-md-10' style={{'textAlign': 'center'}}>{categories.name} </p>
                   </a>
                  
                     

                
                    )
                })}
           
       
 
    </div>


</div>

        );  
    }
});

var EmployeePage = React.createClass({
    getInitialState: function() {
        return {business: {}};
    },
    componentDidMount: function() {
        this.props.service.findById(this.props.businessId).done(function(result) {
            this.setState({business: result});


        }.bind(this));
       
    
  
    },

    render: function () {
     
     
        return (
            <div className={"page " + this.props.position}>
                <Header back="true" path={this.state.business.category}/>
                <div className="content table-view">
                   
                        <div className="table-view-cell media">
                            <img className="media-object big pull-left" src={"pics/" + this.state.business.Name + ".jpg" }/>
                            <h1 className='fixedSize'>{this.state.business.Name}</h1>
                            <p>{this.state.business.address}</p>
                        </div>
                        <div className="table-view-cell media">
                            <a href={"tel:" + this.state.business.officePhone} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body fixedSize">
                                Call
                                    <p>{this.state.business.officePhone}</p>
                                </div>
                            </a>
                        </div>

















                         <div className="table-view-cell media">
                            <a target="_blank" href={this.state.business.website} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body fixedSize">
                                Website
                                    <p>{this.state.business.website}</p>
                                </div>
                            </a>
                        </div>











                        

                           <div className="table-view-cell">
                            
                        <iframe className="gmapStyle col-xs-12" src={"https://google.com/maps/embed/v1/place?q="+ this.state.business.coordinates + "&zoom=17&key=AIzaSyATVILoS8l9ARp2SS2wOViA8xUp2tAMx4A"}></iframe>

                        </div>
                        



                       


                        
                       
                       
                  
                </div>
            </div>
        );
    }
});
var BusinessList =  React.createClass({
   
     
    render: function () {
      
        return (
            <div className={"page " + this.props.position}>
                <Header text={this.props.category} back="true"/>
                <SearchBar searchKey={this.props.searchKey} category={this.props.category} searchHandler={this.props.searchHandler}/>
                <div className="content">
               
                    <EmployeeList businesses={this.props.businesses}/>
                </div>
            </div>

        );
    }
});
var App = React.createClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            businesses: []
           
        }
    },
    searchHandler: function(searchKey, category) {
        businessService.findByName(searchKey, category).done(function(businesses) {
            this.setState({
                searchKey:searchKey,
                businesses: businesses,
                pages: [<BusinessList key="listing" searchHandler={this.searchHandler} searchKey={searchKey} businesses={businesses} category={category}/>]});
        }.bind(this));
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.state.searchKey = ''; // reset search
            this.slidePage(<HomePage  key="list" />);
        }.bind(this));

        router.addRoute('business/:category', function(category) {

            this.searchHistoy = this.state.searchKey || '';
            this.searchHandler(this.searchHistoy, category);
            this.slidePage(<BusinessList key="listing" searchHandler={this.searchHandler} searchKey={this.state.searchKey} businesses={this.state.businesses} category={category}/>);
        }.bind(this));
        router.addRoute('businessPage/:id', function(id) {
            this.slidePage(<EmployeePage key="details" businessId={id} service={businessService}/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);