<!DOCTYPE html>
<html lang="en">

<head>
    <title>Admin</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
    <meta name="author" content="Potenza Global Solutions" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- app favicon -->
    <link rel="shortcut icon" href="{{ asset('/img/hightech.png') }}">
    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <!-- plugin stylesheets -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/vendors.css') }}" />
    <!-- app style -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}" />
</head>

<body>
    <!-- begin app -->
    <div class="app">
        <!-- begin app-wrap -->
        <div class="app-wrap">
            <!-- begin pre-loader -->
            
            <!-- end pre-loader -->
            <!-- begin app-header -->
            <header class="app-header top-bar">
                <!-- begin navbar -->
                <nav class="navbar navbar-expand-md">

                    <!-- begin navbar-header -->
                    
                    <div class="navbar-header d-flex align-items-center">
                        <a href="javascript:void:(0)" class="mobile-toggle"><i class="ti ti-align-right"></i></a>
                        <a class="navbar-brand" href="index.html">
                            <img src="{{ asset('/img/hightech.png') }}" class="img-fluid logo-desktop" alt="logo" style='width:200px;' />
                            <img src="{{ asset('/img/hightech.png') }}" class="img-fluid logo-mobile" alt="logo" />
                        </a>
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="ti ti-align-left"></i>
                    </button>
                    <!-- end navbar-header -->
                    <!-- begin navigation -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navigation d-flex">
                            <ul class="navbar-nav nav-left">
                                <li class="nav-item">
                                    <a href="javascript:void(0)" class="nav-link sidebar-toggle">
                                        <i class="ti ti-align-right"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    
                                    <div class="dropdown-menu mega-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                        <div class="row no-gutters">
                                            <div class="col-sm-2 p-20">
                                                <h4>UI Kit</h4>
                                               
                                            </div>
                                            <div class="col-sm-2 p-20">
                                                <h4>Pages</h4>
                                                <ul>
                                                    <li class="nav-link">
                                                        <a href="page-account-settings.html">Account Settings</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-clients.html">Clients</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-contacts.html">Contacts</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-gallery.html">Gallery</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-pricing.html">Pricing</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-task-list.html">Task List</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-404.html">404</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-500.html">500</a>
                                                    </li>
                                                    <li class="nav-link">
                                                        <a href="page-coming-soon.html">Coming Soon</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-4 p-20">
                                                <h4>Contact Us</h4>
                                                <div>
                                                    <form>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" id="Password1" placeholder="Enter Name">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="email" class="form-control" id="Email1" placeholder="Enter Email">
                                                        </div>
                                                        <div class="form-group">
                                                            <textarea class="form-control" placeholder="Message" id="Textarea1" rows="3"></textarea>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary text-uppercase">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="chart-wrap">
                                                    <div class="p-20">
                                                        <h4 class="mb-1">Page Views</h4>
                                                        <p>Daily page visitors</p>
                                                        <h2 class="text-primary font-xxl mt-2">80+</h2>
                                                    </div>
                                                    <div class="apexchart-wrapper">
                                                        <div id="pageview"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    
                                    <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item nav-link" href="javascript:void(0)">Action</a>
                                        <a class="dropdown-item nav-link" href="javascript:void(0)">Another action</a>
                                        <a class="dropdown-item nav-link" href="javascript:void(0)">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item full-screen d-none d-lg-block" id="btnFullscreen">
                                    <a href="javascript:void(0)" class="nav-link expand">
                                        <i class="icon-size-fullscreen"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav nav-right ml-auto">
                                <li class="nav-item dropdown">
                                   
                                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                        <ul>
                                            <li class="dropdown-header bg-gradient p-4 text-white text-left">Messages
                                                <label class="label label-info label-round">6</label>
                                                <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                    <span class="font-13"> Mark all as read</span></a>
                                            </li>
                                            <li class="dropdown-body">
                                                <ul class="scrollbar scroll_dark max-h-240">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <img class="img-fluid" src="{{ asset('/img/avtar/03.jpg') }}" alt="user3">
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Brianing Leyon</p>
                                                                    <small>You will sail along until you...</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <img class="img-fluid" src="{{ asset('/img/avtar/01.jpg') }}" alt="user">
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Jimmyimg Leyon</p>
                                                                    <small>Okay</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <img class="img-fluid" src="{{ asset('/img/avtar/02.jpg') }}" alt="user2">
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Brainjon Leyon</p>
                                                                    <small>So, make the decision...</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <img class="img-fluid" src="{{ asset('/img/avtar/04.jpg') }}" alt="user4">
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Smithmin Leyon</p>
                                                                    <small>Thanks</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <img class="img-fluid" src="{{ asset('/img/avtar/05.jpg') }}" alt="user5">
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Jennyns Leyon</p>
                                                                    <small>How are you</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <img class="img-fluid" src="{{ asset('/img/avtar/06.jpg') }}" alt="user6">
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Demian Leyon</p>
                                                                    <small>I like your themes</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-footer">
                                                <a class="font-13" href="javascript:void(0)"> View All messages </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    
                                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                        <ul>
                                            <li class="dropdown-header bg-gradient p-4 text-white text-left">Notifications
                                                <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                    <span class="font-13"> Clear all</span></a>
                                            </li>
                                            <li class="dropdown-body min-h-240 nicescroll">
                                                <ul class="scrollbar scroll_dark max-h-240">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <div class="bg-type bg-type-md">
                                                                        <span>HY</span>
                                                                    </div>
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">New registered user</p>
                                                                    <small>Just now</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <div class="bg-type bg-type-md bg-success">
                                                                        <span>GM</span>
                                                                    </div>
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">New invoice received</p>
                                                                    <small>22 min</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <div class="bg-type bg-type-md bg-danger">
                                                                        <span>FR</span>
                                                                    </div>
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Server error report</p>
                                                                    <small>7 min</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <div class="bg-type bg-type-md bg-info">
                                                                        <span>HT</span>
                                                                    </div>
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Database report</p>
                                                                    <small>1 day</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <div class="notification d-flex flex-row align-items-center">
                                                                <div class="notify-icon bg-img align-self-center">
                                                                    <div class="bg-type bg-type-md">
                                                                        <span>DE</span>
                                                                    </div>
                                                                </div>
                                                                <div class="notify-message">
                                                                    <p class="font-weight-bold">Order confirmation</p>
                                                                    <small>2 day</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-footer">
                                                <a class="font-13" href="javascript:void(0)"> View All Notifications
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    
                                    <div class="search-wrapper">
                                        <div class="close-btn">
                                            <i class="ti ti-close"></i>
                                        </div>
                                        <div class="search-content">
                                            <form>
                                                <div class="form-group">
                                                    <i class="ti ti-search magnifier"></i>
                                                    <input type="text" class="form-control autocomplete" placeholder="Search Here" id="autocomplete-ajax" autofocus="autofocus">
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown user-profile">
                                    <a href="javascript:void(0)" class="nav-link dropdown-toggle " id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="{{ asset('img/' . $result->image) }}" alt="avtar-img">
                                        <span class="bg-success user-status"></span>
                                    </a>
                                    <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                        <div class="bg-gradient px-4 py-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="mr-1">
                                                    <h4 class="text-white mb-0">{{$result->nom}}</h4>
                                                    <small class="text-white">{{$result->email}}</small>
                                                </div>
                                                <a href="#" class="text-white font-20 tooltip-wrapper" data-toggle="tooltip" data-placement="top" title="" data-original-title="Logout"> <i
                                                                class="zmdi zmdi-power"></i></a>
                                            </div>
                                        </div>
                                        <div class="p-4">
                                            <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                <i class="fa fa-user pr-2 text-success"></i> Profile</a>
                                            <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                <i class="fa fa-envelope pr-2 text-primary"></i> Inbox
                                                <span class="badge badge-primary ml-auto">6</span>
                                            </a>
                                            <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                <i class=" ti ti-settings pr-2 text-info"></i> Settings
                                            </a>
                                            <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                <i class="fa fa-compass pr-2 text-warning"></i> Need help?</a>
                                            <div class="row mt-2">
                                                <div class="col">
                                                    <a class="bg-light p-3 text-center d-block" href="#">
                                                        <i class="fe fe-mail font-20 text-primary"></i>
                                                        <span class="d-block font-13 mt-2">My messages</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="bg-light p-3 text-center d-block" href="#">
                                                        <i class="fe fe-plus font-20 text-primary"></i>
                                                        <span class="d-block font-13 mt-2">Compose new</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- end navigation -->
                </nav>
                <!-- end navbar -->
            </header>
            <div class="app-container">
                <!-- begin app-nabar -->
                <aside class="app-navbar">
                    <!-- begin sidebar-nav -->
                    <div class="sidebar-nav scrollbar scroll_light">
                        <ul class="metismenu " id="sidebarNav">
                            <li class="nav-static-title">Espace Administration</li>
                            <li>
                                <a href="intervention" aria-expanded="false">
                                    <i class="nav-icon ion ion-ios-clipboard-outline"></i>
                                    <span class="nav-title">Gestion des interventions</span>
                                </a>
                            </li>
                            <li><a href="liste_fiche_admin" aria-expanded="false"><i class="nav-icon ion ion-ios-clipboard-outline"></i><span
                                        class="nav-title">Gestion des fiches d'intervention </span></a> </li>
                            <li><a href="technicien" aria-expanded="false"><i class="fa fa-id-badge"></i><span
                                        class="technicien">Gestion des techniciens </span></a> </li>  
                                        <li><a href="client" aria-expanded="false"><i class="fa fa-users"></i><span
                                        class="nav-title">Gestion des clients</span></a> </li> 
                        </ul>
                    </div>
                    <!-- end sidebar-nav -->
                </aside>

                </div>
            <!-- end app-header -->
            <!-- begin app-container -->
            
                <div class="app-main" id="main">
                    <!-- begin container-fluid -->
                    <div class="container-fluid">
                        <!-- begin row -->
                        <div class="row">
                            <div class="col-md-12 m-b-30">
                                <!-- begin page title -->
                                <div class="user-welcome d-block d-xl-flex flex-nowrap align-items-center">
                                    <div class="bg-img mb-2 mb-xl-0 mr-3">
                                        <img class="img-fluid rounded" src="{{ asset('img/' . $result->image) }}" alt="user">
                                    </div>
                                    <br><br><br><br><br><br>
                                    <div class="page-title mb-2 mb-xl-0">
                                        <h1 class="mb-1">Bonjour,{{$result->nom}}!</h1>
                                        <p>Bienvenue dans votre espace d'administration</p>
                                    </div>
                                  
                                    
                                </div>
                            </div>

                            <img src="{{ asset('/img/admin.jpg') }}"  style='width:600px; position:absolute; left:600px;'  />
                            <!-- end page title -->
                        </div>
                        <!-- end row -->
                        <!-- begin row -->
                        
                            

    <!-- plugins -->
    <script src="assets/js/vendors.js"></script>

    <!-- custom app -->
    <script src="assets/js/app.js"></script>
</body>


</html>