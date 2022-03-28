import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

const Backdrop = (props) => {
  return <div className='backdrop'></div>
}

const ModalOverLay = (props) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  )
}

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        document.getElementById('overlays')
      )}
    </>
  )
}

export default Modal
