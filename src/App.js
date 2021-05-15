import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">My Site</a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#signin">Sign in <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="signin" className="col-md-4 offset-md-4">
        <form className="form-signin text-center">
          <img className="mb-4" src={logo} alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </section>
      <section id="home">
        <div className="jumbotron">
          <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id voluptatum harum pariatur, asperiores nisi!</p>
          <p>Ex ea unde numquam. Totam impedit id non expedita error asperiores recusandae. Corporis, at neque!</p>
          <p>Debitis quas pariatur velit. Eaque totam eveniet commodi aperiam eius neque. Ipsa asperiores eveniet enim.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, provident blanditiis. Minus beatae dignissimos libero blanditiis, nostrum ipsum vero impedit?</p>
          <a class="btn btn-lg btn-primary" href="/docs/4.6/components/navbar/" role="button">Read more &raquo;</a>
        </div>
      </section>
      <footer>
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2021</p>
      </footer>
    </div>
  );
}

export default App;
