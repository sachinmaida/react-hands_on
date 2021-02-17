import logo from './logo.svg';
import './App.css';

export const blogs=[{id:101,blog:"React learning",description:"Welcome to learning react",blogger:"Stephen"},
                    {id:102,blog:"Angular",description:"Welcome to learning Angular",blogger:"John"},
                    {id:103,blog:"Master Python",description:"Welcome to learning Python",blogger:"Robert"}]

export const books=[{id:101,bname:"Master React",price:370},
                    {id:102,bname:"Master Java",price:500},
                    {id:103,bname:"Master Python",price:420}]

export const courses=[{id:101,course:"React",date:'20/10/2020'},
                    {id:102,course:"Angular",date:'21/10/2020'},
                    {id:103,course:"Master Python",date:'22/10/2020'}]

                    
function App() {
  const bookdet=(<ul>
    {
      
      books.map((book)=>{
        return(
          <div>
          <h3>{book.bname}</h3>
          <h3>{book.price}</h3>
        </div>
        );
      })
    }
  </ul>)

const blogdet=(<ul>
  {
    
    blogs.map((blog)=>{
      return(
        <div>
        <h2>{blog.blog}</h2>
        <h3>{blog.blogger}</h3>
        <h3>{blog.description}</h3>
      </div>
      );
    })
  }
</ul>)

const coursedet=(<ul>
  {
    
    courses.map((course)=>{
      return(
        <div>
        <h2>{course.course}</h2>
        <h3>{course.date}</h3>
      </div>
      );
    })
  }
</ul>)



  return (
    
    
    <div className="App">
      <div>
        <h1>Course Details</h1>
        {coursedet}
      </div>
      <div>
        <h1>Book Details</h1>
        {bookdet}
      </div>
      <div>
        <h1>Blog Details</h1>
        {blogdet}
      </div>
    </div>
  );
}

export default App;
