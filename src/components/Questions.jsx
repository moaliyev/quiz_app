import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <div className="row">
          <h2 className="title">Questions</h2>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <th>Status</th>
                <th>Title</th>
                <th>Category</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <Link>Permutations</Link>
                </td>
                <td>Math</td>
                <td className="hard">Hard</td>
              </tr>
              <tr className="striped">
                <td></td>
                <td>
                  <Link>Viscosity</Link>
                </td>
                <td>Physics</td>
                <td className="easy">Easy</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link>Where are you from?</Link>
                </td>
                <td>Geography</td>
                <td className="medium">Medium</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Questions;
