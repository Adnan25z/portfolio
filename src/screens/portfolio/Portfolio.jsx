import React, { useState } from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
 
function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})
 
  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
         {/* make sure to add rel="noreferrer" for netlify upload */}
          <a id="portfolio__modal__link" href={data.link} target="_blank" rel="noreferrer">Go to site</a>
        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
 
  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio__card__container">
        <Image className="portfolio__image" onClick={(a) => {
          setTempData({
            image: e.image,
            link: e.link,
            title: e.title,
            summary: e.summary,
            tech: e.tech
          })
          setModalShow(true)
        }}
          src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    )
  })
 
  return (
    <div className="portfolio__main__container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>
        This is my Github page
        <a href="https://github.com/adnan25z" target="_blank" rel="noreferrer"> https://github.com/adnan25z</a>
      </p>
      <Container fluid="lg" style={{ padding: '2rem 0' }}>
        <Row>
          {mapped}
        </Row>
      </Container>
    </div>
  );
}
 
export default Portfolio