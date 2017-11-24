<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Anonymous') }}</title>

    <!-- Styles -->
    <link rel="shortcut icon" href="{{{ asset('img/favicon.png') }}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/font-awesome/css/font-awesome.min.css') }}"> 
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/css/style.css') }}">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'Laravel') }}
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav">
                       <li><a href="{{ url('/contributions') }}">Corruption</a></li>
                    </ul>
                                       
                     <ul class="nav navbar-nav">
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Utilities <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="{{ url('/loans') }}">Water</a></li>
                                 <li role="separator" class="divider"></li>
                                <li><a href="{{ url('/loan-history') }}">Electricity</a></li>
                             </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav">
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="{{ url('/loans') }}">Government</a></li>
                                 <li role="separator" class="divider"></li>
                                <li><a href="{{ url('/loan-history') }}">Private</a></li>
                             </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav">
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Transport <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="{{ url('/loans') }}">Accidents</a></li>
                                 <li role="separator" class="divider"></li>
                                <li><a href="{{ url('/loan-history') }}">Road Usage</a></li>
                             </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                         
                            <li><a href="{{ route('login') }}">Login</a></li>
                            <li><a href="{{ route('register') }}">Register</a></li>
                        @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>
</div>
        @yield('content')
   

    <script type="text/javascript" src="{{ asset('asset/js/jquery-2.2.4.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('asset/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('asset/js/general_script.js') }}"></script>
    <script type="text/javascript" src="{{ asset('asset/js/script.js') }}"></script>
    <script>
        skrollr.init();
    </script>
    <script type="text/javascript">
        $(document).ready(function(){
           $(function () {
              $('[data-toggle="tooltip"]').tooltip()
          });

           $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
        });
       });
   </script> 

   @yield('extrajs')
</body>
</body>
</html>
