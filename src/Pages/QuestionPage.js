import React, { useState, useEffect, useRef } from 'react';
import EditorJSView from '../Components/EditorJSViewer';
import CreateQuestion from './CreateQuestion';

function AllQuestions() {
  const [createQuestion, setCreateQuestion] = useState(false)
  const dialogRef = useRef(null);

  const openDialog = () => {
    setCreateQuestion(true);
  };

  const closeDialog = () => {
    setCreateQuestion(false);
  };

  const handleOverlayClick = (e) => {
//
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      closeDialog();
    }
  };

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedDiv, setSelectedDiv] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0)
  const count = 6;

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        query: searchQuery,
        offset,
        count,
      });
      const res = await fetch(`/api/knowledge/all?${queryParams}`);
      const data = await res.json();
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //fetchQuestions();
  }, [searchQuery, offset]);

  useEffect(
    () => {
      //it was fetchQuestions
    const test = {
      "EditorData":{"current":{"time":1684002021038,"blocks":[{"id":"BWrhEdD4Rs","type":"header","data":{"text":"If there are 100 people, how many would be more patient than you?","level":1}},{"id":"1cz04-Tz2K","type":"paragraph","data":{"text":"If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires. The process is straightforward. Indicate the number of random questions you want to see and then click on the button. You will instantly see a random assortment of questions corresponding to the number you indicated you wanted to see. There are a number of ways random questions can be useful."}}],"version":"2.26.5"}},"category_name":"Dolo","tag":["lol", "justasking"]
    };
    setQuestions([JSON.stringify(test)])

    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }
  , [])
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - count);
    }
  };
  const handleNextPage = () => {
    setOffset(offset + count);
  };

  const handleSelection = (div) => {
    (div != selectedDiv)?
      setSelectedDiv(div):
      setSelectedDiv(null);
  }

  return (
    <div className="d-flex flex-column align-items-center p-4 m-auto bg-dark h-75 w-75 gap-4 align-self-center rounded-3">
    <div className='d-inline-flex input-group'>
      <label htmlFor="search" className='input-group-text'>Search</label>
      <input
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className='form-control rounded-end'
      />
      <a href="#" className='text-decoration-none' onClick={()=>setCreateQuestion(!createQuestion)}><i class="bi bi-plus-square fs-l text-white " style={{fontSize: '28px', margin: '-6px', padding: '0px 0px 0px 15px'}}></i></a>
   
      </div>
    <div className='d-flex flex-column align-items-center w-75 '>
      {
        questions.map((question) => {
          question = JSON.parse(question)
        return (
        <a href="#" className='text-decoration-none' onClick={()=>{handleSelection(question.EditorData.current.time) }}>
          <EditorJSView data={question}  collapsed={selectedDiv} />
        </a>)
        })
      }
    </div>
    <div>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
    {createQuestion && <CreateQuestion isOpen={createQuestion} setIsOpen={setCreateQuestion} dialogRef={dialogRef} />
    }
    </div>
  );
}
export default AllQuestions;