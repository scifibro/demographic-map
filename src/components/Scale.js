import React from 'react'

const Scale = () =>{
    return(
      <ul class="ib">
        <li class="decline">
          <h4>Нзвание выбранного коэфицента </h4>
          <p>
            <em class="decline1"></em>
            <span data-cmp="0:4">&lt;2</span>
          </p>
          <p>
            <em class="decline2"></em>
            <span data-cmp="4:8">4-8</span>
          </p>
          <p>
            <em class="decline3"></em>
            <span data-cmp="8:12">8-12</span>
          </p>
          <p>
            <em class="decline4"></em>
            <span data-cmp="12:16">12-16</span>
          </p>
          <p>
            <em class="decline5"></em>
            <span data-cmp="16:20">16-20</span>
          </p>
          <p>
            <em class="decline6"></em>
            <span data-cmp="20:24">20-24</span>
          </p>
          <p>
            <em class="decline7"></em>
            <span data-cmp="24:">&gt;24</span>
          </p>
        </li>
      </ul>
    );
}


export default Scale