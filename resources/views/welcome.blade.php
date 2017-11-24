@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-2 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Feeds</div>

                <div class="panel-body">


                    Welcome page
                </div>
            </div>
        </div>
        <div class="col-md-6 col-md-offset-0">
            <div class="panel panel-default">
                {{-- <div class="panel-heading"> --}}
                    <div class="col-lg-12">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
                          <span class="input-group-btn">
                            <button class="btn btn-secondary" type="button">Search!</button>
                        </span>
                    </div>
                </div>
                {{-- </div> --}}

                <div class="panel-body">

Posts and likes
                </div>
            </div>
        </div>
        
        <div class="col-md-2 col-md-offset-0">
            <div class="panel panel-default">
                <div class="panel-heading">Feeds</div>

                <div class="panel-body">


                    Welcome page
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
