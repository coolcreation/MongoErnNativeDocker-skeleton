import React from "react"

export default function TaskMenu() {
  return (
    <div class="task-menu-container">
    <ul class="task-menu d-flex gap-3 list-unstyled">
        <li>
          <button href="#" class="task-button m-0" type="button" role="tab" aria-selected="false"> 
            <div className="task-icon m-0"><img src={"./createIcon.svg"} alt="" /></div>
            <div className="task-description m-0 d-flex flex-column align-items-start">
                <h5>Create</h5>
                <p>Files and Folders</p>
            </div>    
          </button>
        </li>

        <li>
          <button href="#" class="task-button m-0" type="button" role="tab" aria-selected="false"> 
            <div className="task-icon m-0"><img src={"./addLinkIcon.svg"} alt="" /></div>
            <div className="task-description m-0 d-flex flex-column align-items-start">
                <h5>Add Link</h5>
                <p>Url, Website, Bookmark</p>
            </div>    
          </button>
        </li>

        <li>
          <button href="#" class="task-button m-0" type="button" role="tab" aria-selected="false"> 
            <div className="task-icon m-0"><img src={"./uploadIcon.svg"} alt="" /></div>
            <div className="task-description m-0 d-flex flex-column align-items-start">
                <h5>Upload</h5>
                <p>Files, Images, PDF's, etc.</p>
            </div>    
          </button>
        </li>

        <li>
          <button href="#" class="task-button m-0" type="button" role="tab" aria-selected="false"> 
            <div className="task-icon m-0"><img src={"./tasksIcon.png"} alt="" /></div>
            <div className="task-description m-0 d-flex flex-column align-items-start">
                <h5>Tasks</h5>
                <p>Create boards, manage</p>
            </div>    
          </button>
        </li>

        <li>
          <button href="#" class="task-button m-0" type="button" role="tab" aria-selected="false"> 
            <div className="task-icon m-0"><img src={"./notesIcon.png"} alt="" /></div>
            <div className="task-description m-0 d-flex flex-column align-items-start">
                <h5>Notes</h5>
                <p>Take Notes and Records</p>
            </div>    
          </button>
        </li>

    </ul>

  </div>
  )
}
