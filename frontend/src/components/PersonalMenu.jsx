import React from 'react'

export default function PersonalMenu() {
  return (
          <div class="personal-menu-container">
              <ul class="personal-menu d-flex gap-3 list-unstyled">
                  <li>
                    <button href="#" class="p-1 d-flex align-items-center gap-2 fw-bold" type="button" role="tab" aria-selected="false"> 
                      <svg class="text-info" width="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderOpenIcon">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
                      </svg>
                      Drive
                    </button>
                  </li>
                  <li>
                    <button href="#" class="p-1 d-flex align-items-center gap-2 fw-bold" type="button" role="tab" aria-selected="false"> 
                      <svg class="text-info" width="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderOpenIcon">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
                      </svg>
                      Chat
                    </button>
                  </li>
                  <li>
                    <button href="#" class="p-1 d-flex align-items-center gap-2 fw-bold" type="button" role="tab" aria-selected="false"> 
                      <svg class="text-info" width="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderOpenIcon">
                        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
                      </svg>
                      Members
                    </button>
                  </li>
                  <li>
                    <button href="#" class="p-1 d-flex align-items-center gap-2 fw-bold" type="button" role="tab" aria-selected="false"> 
                      <svg class="text-info" width="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderOpenIcon">
                        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                      </svg>
                      Apps
                    </button>
                  </li>
                  <li>
                    <button href="#" class="p-1 d-flex align-items-center gap-2 fw-bold" type="button" role="tab" aria-selected="false"> 
                      <img src={'./Admin.png'} alt="" width="30"/>
                      Admin
                    </button>
                  </li>


              </ul>

            </div>

  )
}
