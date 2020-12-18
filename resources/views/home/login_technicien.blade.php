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
            
            </div>
            <!-- end pre-loader -->

            <!--start login contant-->
            <div class="app-contant">
                <div class="bg-white">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                                <div class="d-flex align-items-center h-100-vh">
                                    <div class="login p-50">
                                        <h1 class="mb-2" style='color:#352885;'>Univers HighTech</h1>
                                        <p>Welcome back, please login to your account.</p>

                                        @if ($message = Session::get('success'))

<div class="alert alert-success">

    <p style='color:black;'>{{ $message }}</p>

</div>

@endif                               

@if ($messagefails = Session::get('fails'))

<div class="alert alert-danger">

    <p >{{ $messagefails }}</p>

</div>

@endif                   
                                        <form action="{{ url('login_technicien') }}" class="mt-3 mt-sm-5" method='post'>

                                        {{ csrf_field() }}
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group {{ $errors->has('ICE') ? 'has-error' : '' }}">
                                                        <label class="control-label">email*</label>
                                                        <input type="text" class="form-control" placeholder="email" name='email' />
                                                        @if ($errors->has('email'))

<span class="text-danger">{{ $errors->first('email') }}</span>

@endif
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                                                        <label class="control-label">Password*</label>
                                                        <input type="password" class="form-control" placeholder="password"  name='password' />
                                                        @if ($errors->has('password'))

<span class="text-danger">{{ $errors->first('password') }}</span>

@endif
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-block d-sm-flex  align-items-center">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="gridCheck">
                                                            <label class="form-check-label" for="gridCheck">
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                        <a href="{{URL('/forgotpassword')}}" class="ml-auto">Forgot Password ?</a>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">
                                                        Connecter
                                                    </button>
                                                <div class="col-12  mt-3">
                                                    <p>Don't have an account ?<a href="auth-register.html"> Sign Up</a></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
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
    <script src="{ asset('/js/app.js') }}"></script>
</body>


</html>