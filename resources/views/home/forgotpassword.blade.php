<!DOCTYPE html>
<html lang="en">


<head>
    <title>Mentor - Bootstrap 4 Admin Dashboard Template</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
    <meta name="author" content="Potenza Global Solutions" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- app favicon -->
    <link rel="shortcut icon" href="{{ asset('/img/favicon.ico') }}">
    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <!-- plugin stylesheets -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/vendors.css') }}" />
    <!-- app style -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}" />
</head>

<body class="bg-white">
    <!-- begin app -->
    <div class="app">
        <!-- begin app-wrap -->
        <div class="app-wrap">
            <!-- begin pre-loader -->
            <div class="loader">
                <div class="h-100 d-flex justify-content-center">
                    <div class="align-self-center">
                        <img src="{{ asset('/img/loader/loader.svg') }}" alt="loader">
                    </div>
                </div>
            </div>
            <!-- end pre-loader -->

            <!--start login contant-->
            <div class="app-contant">
                <div class="bg-white">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-sm-6 col-lg-5 col-xl-3  align-self-center order-2 order-sm-1">
                                <div class="d-flex align-items-center h-100-vh">
                                    <div class="login p-50 w-100">


                                    @if ($message = Session::get('success'))

<div class="alert alert-success">

    <p style='color:black;'>{{ $message }}</p>

</div>

@endif                               

@if ($messagefails = Session::get('error'))

<div class="alert alert-danger">

    <p >{{ $messagefails }}</p>

</div>

@endif
                                 <form method='post' action="{{ url('forgotpassword') }}" >   
                              
                                 {{ csrf_field() }}
                                        <p class="mt-4 mb-0">Forgot Password ? </p>
                                        <div class="input-group my-3">
                                            <input type="text" class="form-control" placeholder="Enter your EMail" aria-label="" aria-describedby="basic-addon2" name='email'>
                                            <div class="input-group-append">
                                                <button type='submit' name='submit' class="btn btn-primary"><i class="fa fa-unlock"></i></button>
                                            </div>
                                        </div>
</form>
                                        <p class="mt-4 mb-0">Or sign in as a <a class="text-primary" href="">Different user</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                                <div class="row align-items-center h-100">
                                    <div class="col-7 mx-auto ">
                                        <img class="img-fluid" src="{{ asset('/img/bg/login.svg') }}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end login contant-->
        </div>
        <!-- end app-wrap -->
    </div>
    <!-- end app -->



    <!-- plugins -->
    <script src="{{ asset('/js/vendors.js') }}"></script>

    <!-- custom app -->
    <script src="{{ asset('/js/app.js') }}"></script>
</body>


</html>