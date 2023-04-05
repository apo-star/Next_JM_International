import Image from "next/image";
import { Inter } from "next/font/google";
import "./footer.css";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <main>
      <div className="container">
        <div className="col-md-4">
          <h3>Contact Us</h3>
          <p>
            1234 Main Street City, State 12345 Phone: (123) 456-7890 Email:
            info@yourcompany.com
          </p>
        </div>
        <div className="col-md-4">
          <h3>Brands</h3>
          <ul>
            <li>
              <a href="#">Brand 1</a>
            </li>
            <li>
              <a href="#">Brand 2</a>
            </li>
            <li>
              <a href="#">Brand 3</a>
            </li>
            <li>
              <a href="#">Brand 4</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="#">Product 1</a>
            </li>
            <li>
              <a href="#">Product 2</a>
            </li>
            <li>
              <a href="#">Product 3</a>
            </li>
            <li>
              <a href="#">Product 4</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
