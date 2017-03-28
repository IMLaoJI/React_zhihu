

export default (
    <div>
      <Route path="/" component={Login} onLeave={()=>{dispatch(resetState())}}/>
      <Route path="/admin" component={App} />
    </div>
);
