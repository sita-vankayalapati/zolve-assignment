
import React, { Component } from "react"

export default class CopytoClipboard extends Component {
  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
          <div className="copy-header">
              CopyToClipBoard  
          </div>
          <br/>
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
           // value="Example copy for the textarea."
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </button>
          
        </div>
      </div>
    )
  }
}