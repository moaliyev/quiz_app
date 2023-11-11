import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuestionsBySubject = () => {
  return (
    <section className="questions" style={{ height: "78vh" }}>
      <div className="container">
        <div className="row">
          <h2 className="title">Question from Math</h2>
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
                  <Link>Two Sum</Link>
                </td>
                <td>Math</td>
                <td>Easy</td>
              </tr>
              <tr className="striped">
                <td></td>
                <td>
                  <Link>Two Sum</Link>
                </td>
                <td>Math</td>
                <td>Easy</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default QuestionsBySubject;
