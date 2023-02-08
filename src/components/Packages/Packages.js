import Link from "next/link";
import React from "react";

export default function Packages() {
  return (
    <div className="comparison">
      <table>
        <thead>
          <tr>
            <th className="tl tl2"></th>
            <th className="product">Silver</th>
            <th className="product">Diamond</th>
          </tr>
          <tr>
            <th></th>
            <th className="price-info">
              <div className="price-now">
                <span>1,500</span>
                <p>/ Month</p>
              </div>
            </th>
            <th className="price-info">
              <div className="price-now">
                <span>3,000</span>
                <p>/ Month</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> </td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>60 Minutes</td>
            <td>60 Minutes</td>
          </tr>
          <tr>
            <td> </td>
            <td colspan="3"></td>
          </tr>
          <tr className="compare-row">
            <td>Frequancy</td>
            <td>1</td>
            <td>can vary according to coach</td>
          </tr>
          <tr>
            <td> </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td>Group Size</td>
            <td>1</td>
            <td>10</td>
          </tr>
          <tr>
            <td> </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td>Free Resource</td>
            <td>-</td>
            <td>2 (1:1 session)</td>
          </tr>
          {/* <tr>
            <td> </td>
            <td colspan="3">item_10</td>
          </tr>
          <tr>
            <td>item_10</td>
            <td colspan="3">description_union row</td>
          </tr> */}
          <tr>
            <td> </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/course-grid">
                <button className="price-buy">Add to Cart</button>
              </Link>
            </td>
            <td>
              <Link href="/course-grid">
                <button className="price-buy">Add to Cart</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
