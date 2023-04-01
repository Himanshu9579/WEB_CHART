import React, { useState } from 'react'
import './tooltip.css'
import Modal from 'react-modal'
import ModalBubble from '../graphs/ModalBubble'

// import { MdOutlineMapsHomeWork } from 'react-icons/md'
// import { TbBuildingPavilion } from 'react-icons/tb'
// import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
// import { RiDeleteBinLine } from 'react-icons/ri'
// import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { RiBuilding2Line } from 'react-icons/ri'

Modal.setAppElement('#root')

const Tooltip = ({ text, number, left, top, fill, iconName }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <div className="tooltip" onClick={() => setModalIsOpen(true)} style={{ left: `${left}%`, top: `${top}%` }}>

                <div className='tooltip__icon' style={{ background: `${fill}` }} >
                    <RiBuilding2Line className='icons'/>
                </div>
                <div className='tooltip__detail'>
                    <div className='tooltip__detail-heading'>{text}</div>
                    <div className='tooltip__detail-number'>{number}</div>
                </div>

            </div>
            




            {/* =============Modal implementation starts================ */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    content: {
                        width: "48%",
                        height: "60%",
                        position: "absolute",
                        top: "18%",
                        left: "25%",
                        borderRadius: "20px",
                        // border: "0",
                        boxShadow: '0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)'
                    }
                }}
            >
                <div className="container">
                    <ModalBubble/>
                </div>
            </Modal>
            {/* =============Modal implementation ends================ */}
        </>
    )
}

export default Tooltip;

