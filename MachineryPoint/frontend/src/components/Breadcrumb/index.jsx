import {Link} from 'react-router-dom';

const Breadcrumb = (props) => {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{props.name}</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>{props.name}</li>
          </ol>
        </div>

      </div>
    </section>
  )
}

export default Breadcrumb