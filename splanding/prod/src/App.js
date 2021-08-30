import './App.css';

function App() {
  return (
<>
  <header className="mb-auto">
    <div>
      <h3 hidden className="float-md-start mb-0">Paul Collins</h3>
      <nav hidden className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/projects">Projects</a>
        <a className="nav-link" href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main className="px-3">
    <h1>Paul Collins</h1>
    <p className="lead">IBM Data Engineer</p>
    <p className="lead">
    <a href="https://github.com/severalpens" className="btn btn-lg btn-secondary fw-bold border-white bg-white m-3">Github</a>
    <a href="https://www.youtube.com/channel/UCuFhL_mEedCp4FDpIrSS9gA" className="btn btn-lg btn-secondary fw-bold border-white bg-white m-3">Youtube</a>
    <a href="https://severalpens.gatsbyjs.io/" className="btn btn-lg btn-secondary fw-bold border-white bg-white m-3">Blog</a>
    <a href="https://www.linkedin.com/in/paul-collins-541b2053/" className="btn btn-lg btn-secondary fw-bold border-white bg-white m-3">LinkedIn</a>
    </p>
  </main>

  <footer className="mt-auto text-white-50">
    <p><a href="https://severalpens.com/" className="text-white">Severalpens.com</a></p>
  </footer>
</>
  );
}

export default App;
