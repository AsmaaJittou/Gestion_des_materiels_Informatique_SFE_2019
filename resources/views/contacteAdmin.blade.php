<!DOCTYPE html>
<html lang="en">


<head>
    <title>Contacter Administrateur</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
    <meta name="author" content="Potenza Global Solutions" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- app favicon -->
    <link rel="shortcut icon" href="{{('img/favicon.ico')}}">
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
                        <a class="navbar-brand" href="profil">
                            <img src="{{('img/hightechok.png')}}" class="img-fluid logo-desktop" alt="logo" />
                            <img src="{{('img/hightechok.png')}}" class="img-fluid logo-mobile" alt="logo" />
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
                              
                                
                            </ul>
                            <ul class="navbar-nav nav-right ml-auto">
                                <li class="nav-item dropdown">
                                  
                                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                        <ul>
                                           
                                            <li class="dropdown-body">
                                                <ul class="scrollbar scroll_dark max-h-240">
                                            
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                   
                                    <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                        <ul>
                                            <li class="dropdown-header bg-gradient p-4 text-white text-left">
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
                                        <img src="{{('img/avtar/04.jpg')}}" alt="avtar-img">
                                        <span class="bg-success user-status"></span>
                                    </a>
                                    <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                        <div class="bg-gradient px-4 py-3">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="mr-1">
                                                    <h4 class="text-white mb-0">Alice Williams</h4>
                                                    <small class="text-white">Henry@example.com</small>
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
            <!-- end app-header -->
            <!-- begin app-container -->
            <div class="app-container">
                <!-- begin app-nabar -->
                <aside class="app-navbar">
                    <!-- begin sidebar-nav -->
                    <div class="sidebar-nav scrollbar scroll_light">
                    <ul class="metismenu " id="sidebarNav">
                    <li><a href="profil" aria-expanded="false"><i class="nav-icon ion ion-ios-card-outline"></i><span
                                        class="nav-title" style=" font: 2rem 'Sakkal Majalla', sans-serif; text-align: justify; ">Profil </span></a> </li>   
                           <li> 
                                <a href="interventions" aria-expanded="false">
                                    <i class="nav-icon ion ion-ios-clipboard-outline"></i>
                                    <span class="nav-title" style=" font: 2rem 'Sakkal Majalla', sans-serif; text-align: justify; ">Demande Intervention</span>
                                </a>
                            </li>
                            <li><a href="listMateriel" aria-expanded="false"><i class="nav-icon zmdi zmdi-desktop-windows"></i><span
                                        class="nav-title" style=" font: 2rem 'Sakkal Majalla', sans-serif; text-align: justify; " >Liste matériels</span></a> </li>
                            <li><a href="contrat" aria-expanded="false"><i class="nav-icon ion ion-ios-card-outline"></i><span
                                        class="nav-title" style=" font: 2rem 'Sakkal Majalla', sans-serif; text-align: justify; ">Demande contrat</span></a> </li>   
                            <li><a href="Contacter" aria-expanded="false"><i class="nav-icon ti ti-email"></i><span
                                        class="nav-title" style=" font: 2rem 'Sakkal Majalla', sans-serif; text-align: justify; ">Contacter admin</span></a> </li>
                        </ul>
                    </div>
                    <!-- end sidebar-nav -->
                </aside>
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
                                    <div class="page-title mb-2 mb-sm-0">
                                        <h1>Mail</h1>
                                    </div>
                                    <div class="ml-auto d-flex align-items-center">
                                        <nav>
                                            <ol class="breadcrumb p-0 m-b-0">
                                                <li class="breadcrumb-item">
                                                    <a href="index.html"><i class="ti ti-home"></i></a>
                                                </li>
                                                <li class="breadcrumb-item active text-primary" aria-current="page">Mail</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                                <!-- end page title -->
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row">
                            <div class="col-12">
                                <div class="card card-statistics mail-contant">
                                    <div class="card-body p-0">
                                <br> <br> <br> <br> <br>  <br> <br> <br> <br> <br> <br> <br> <br> <br>
                                             
                                              
                                                <div class="bg-light mail-f px-4 py-3">
                                                <form method="post" action=" {{ url('Contacter/send')}}" >
                                                {{ csrf_field() }}
                                                    <div class="py-2 bg-white px-4 py-3 d-flex justify-content-between">
                                                        <p>Cliquez ici pour <a href="#editer" data-toggle="collapse" class="text-primary px-1">Envoyer un message à l'administrateur</a>or<a href="#forward" data-toggle="collapse" class="text-primary px-1">Transférer</a></p>
                                                       
                                                    </div>
                                                    <div class="collapse" id="editer">
                                                        <div class="form-group">
                                                            <textarea class="form-control mt-3" name="objetSend" id="exampleFormControlTextarea1" rows="3" placeholder="Type here..."></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="forward">
                                                        <div class="form-group">
                                                            <input class="form-control mt-3"  id="exampleFormControl" value="hightechsome@gmail.com" />
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between py-2">
                                                        <div>
                                                            <button  type="submit" class="btn btn-primary"><span>Envoyer</span> <i class="fa fa-paper-plane"></i></button>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end container-fluid -->
                </div>
                <!-- end app-main -->
            </div>
            <!-- end app-container -->
            <!-- begin footer -->
            <footer class="footer">
                <div class="row">
                    <div class="col-12 col-sm-6 text-center text-sm-left">
                        <p>&copy; Copyright 2019. All rights reserved.</p>
                    </div>
                    <div class="col  col-sm-6 ml-sm-auto text-center text-sm-right">
                        <p><a href="templatespoint.net"></a>TemplatesPoint</p>
                    </div>
                </div>
            </footer>
            <!-- end footer -->
        </div>
        <!-- end app-wrap -->
    </div>
    <!-- end app -->

    <!-- plugins -->
    <script src="{{('js/vendors.js')}}"></script>

    <!-- custom app -->
    <script src="{{('js/app.js')}}"></script>
    <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script>
</body>


</html>