import EditorComponent, { DEFAULT_INITIAL_DATA } from '../Components/EditorComponent';
import React, { useState, useEffect, useRef } from 'react';
import './CreateQuestion.css'
import { TagsInput } from "react-tag-input-component";

function CreateQuestion({isOpen, dialogRef,setIsOpen}) {
  let EditorData = useRef(DEFAULT_INITIAL_DATA);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch('/api/knowledge/category');
    const data = await res.json();
    setCategories(data);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const questionBody = JSON.stringify({
          EditorData,
          category_name: selectedCategory,
          tag: tags,
        })
    try {
      const res = await fetch('/api/knowledge/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: questionBody,
      });
      if (res.ok) {
        console.log('Question created successfully');
        // redirect to question details page
      } else {
        console.log('Error creating question');
      }
    } catch (error) {
      console.log(error);
    }
    console.log(questionBody)
  };
  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
      closeDialog();
  };

  const dialogStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex: "9999"
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
    display: isOpen? "block" : "none"
  };

  return (
    <div>
      <i className="fa fa-info-circle" onClick={openDialog} />
    <div style={dialogStyles} className="bg-white m-4 p-4 questionDialogue rounded-3 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category" className="text-dark font-weight-bold">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">--Select category--</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className='p-2'>
          <label>Tags:</label>
          <TagsInput
            value={tags}
            onChange={setTags}
            name="Tags"
            placeHolder="Add Tags"
          />
        </div>
        <div>
        <EditorComponent EditorData={EditorData}/>
        </div>
        <div className='d-grid gap-2 d-md-flex mt-12 justify-content-md-end'>
        <button type="submit" className="btn btn-dark me-md-2 submit-button">Submit</button>
        </div>
      </form>
    </div>
    <div style={overlayStyles} onClick={handleOverlayClick} />
    </div>
  );
}

export default CreateQuestion;