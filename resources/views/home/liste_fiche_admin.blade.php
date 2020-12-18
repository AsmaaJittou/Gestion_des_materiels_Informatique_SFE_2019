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
    <link rel="shortcut icon" href="{{ asset('/img/hightech.png') }}}">
    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <!-- plugin stylesheets -->
    <link rel="stylesheet" type="text/css" href="{{('css/vendors.css')}}" />
    <!-- app style -->
    <link rel="stylesheet" type="text/css" href="{{('css/style.css')}}" />
</head>

<body>
    <!-- begin app -->
    <div class="app">
        <!-- begin app-wrap -->
        <div class="app-wrap">
            <!-- begin pre-loader -->
            <div class="loader">
                <div class="h-100 d-flex justify-content-center">
                    <div class="align-self-center">
                        <img src="{{('img/loader/loader.svg')}}" alt="loader">
                    </div>
                </div>
            </div>
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
                                                
                                            </div>
                                            <div class="col-sm-2 p-20">
                                                <h4>Pages</h4>
                                              
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
                                    
                                        
                                    </a>
                                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                        <ul>
                                           
                                            <li class="dropdown-body">
                                                
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    
                                       
                                       
                                    </a>
                                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                        <ul>
                                            <li class="dropdown-header bg-gradient p-4 text-white text-left">Notifications
                                                <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                    <span class="font-13"> Clear all</span></a>
                                            </li>
                                           
                                           
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    
                                    <div class="search-wrapper">
                                        <div class="close-btn">
                                            <i class="ti ti-close"></i>
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
            <!-- end app-header -->
            <!-- begin app-container -->
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
                            <li><a href="technicien" aria-expanded="false"><i class="nav-icon ti ti-email"></i><span
                                        class="technicien">Gestion des techniciens </span></a> </li>  
                                        <li><a href="client" aria-expanded="false"><i class="nav-icon ion ion-ios-clipboard-outline"></i><span
                                        class="nav-title">Gestion des clients</span></a> </li> 
                        </ul>
                    </div>
                    <!-- end sidebar-nav -->
                </aside>

                </div>
                <!-- end app-navbar -->
                <!-- begin app-main -->
                <div class="app-main" id="main">
                    <!-- begin container-fluid -->
                    <div class="container-fluid">
                        <!-- begin row -->
                        <div class="row">
                            <div class="col-md-12 m-b-30">
                                <!-- begin page title -->
                                <div class="d-block d-sm-flex flex-nowrap align-items-center">
                                   
                                   <div class="ml-auto d-flex align-items-center">
                                       <nav>
                                           
                                       </nav>
                                   </div>
                                  
                               </div>
 
                                <!-- end page title -->
                            </div>
                        </div>
                        <!-- end row -->
                        <!-- start Validation row -->
                        <div class="row">
                            <div class="col-xxl-6 m-b-30">
                                <div class="card card-statistics h-100 mb-0">
                                    <div class="card-header d-flex align-items-center justify-content-between">
                                        <div class="card-heading">
                                            <h4 class="card-title">Liste des Fiches d'interventions</h4>
                                        </div>
                                        <div class="dropdown">
                                           
                                            <div class="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                                                <h6 class="mb-1">Action</h6>
                                                <a class="dropdown-item" href="#!"><i class="fa-fw fa fa-file-pdf-o pr-2"></i>Export to PDF</a>
                                                <a class="dropdown-item" href="#!"><i class="fa-fw fa fa-file-excel-o pr-2"></i>Export to CSV</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table id="latestjobs" class="table table-borderless table-striped jobportal-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Num Fiche </th>
                                                        <th>Date de creation</th>
                                                        <th>ICE Client</th>

                                                        <th>Traveaux effectuer</th>
                                                        <th>Observation</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                @foreach ($fiche as $object)
                                                <tbody class="text-muted">
                                               
                                                    <tr>
                                                        <td>{{ $object->id }}</td>
                                                        <td>
                                                            <p>{{ $object->date}}</p>
                                                        </td>
                                                        <td>{{ $object->ICE}}</td>
                                                        <td>{{ $object->travaux_effectuer}}</td>
                                                        <td>
                                                        {{ $object->observation}}
                                                        </td>
                                                        <td>
                                                        <form method="post" action="{{ action('fichController@comfirmer',$object->id)}}">
                                                        {{ csrf_field()}}
                                                        <button  type='submit' name='submit' class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="fa fa-check"></i></button>
                                                        
                                     
                                            <button  type='submit' name='submit' class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></button></td>
                                            </form>
                                                        </td>

                                                    </tr>
                                                   @endforeach 
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- end Validation row  -->
                    </div>
                    <!-- end container-fluid -->
                </div>
                <!-- end app-main -->
            </div>
            <!-- end app-container -->
            <!-- begin footer -->
           
            <!-- end footer -->
        </div>
        <!-- end app-wrap -->
    </div>
    <!-- end app -->

    <!-- plugins -->
    <script src="{{('js/vendors.js')}}"></script>

    <!-- custom app -->
    <script src="{{('js/app.js')}}"></script>
</body>


</html>