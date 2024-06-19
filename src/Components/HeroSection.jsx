import React from 'react'
import IMG from '../Images/videoconfo1.png'
import { useDisclosure } from '@chakra-ui/react'
import { MdContentCopy } from "react-icons/md";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    // Lorem
  } from '@chakra-ui/react'


const HeroSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Transform the Way You Communicate
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Connect, collaborate, and conquer with our all-in-one video conferencing solution. Enjoy seamless communication and secure connections, enhancing productivity for teams everywhere.
          </p>
          <button onClick={onOpen}  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-slate-300 hover:text-blue-950 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" style={{ boxShadow : "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
            Create Meeting
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" ></path>
            </svg>
          </button>
         

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        <div className=' flex'> Meet Link  <MdContentCopy /></div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          <a href="#/" className="inline-flex items-center justify-center border-4 px-5 py-3 text-base font-medium text-center text-gray-900  border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={IMG} alt="mockup" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeroSection