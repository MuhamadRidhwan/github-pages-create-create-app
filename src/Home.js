import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Button } from 'reactstrap';
import { Card } from 'react-bootstrap';
import Helmet from "react-helmet";

import img1 from './assets/images/contents/ccis.png';
import book1 from './assets/images/contents/book1.jpg';
import book2 from './assets/images/contents/book2.png';
import book4 from './assets/images/contents/book5.jpg';

import speaker1 from './assets/images/contents/speaker1.jpg';
import speaker2 from './assets/images/contents/speaker2.jpg';
import speaker3 from './assets/images/contents/speaker3.jpg';
import speaker4 from './assets/images/contents/speaker4.jpg';
import speaker5 from './assets/images/contents/speaker5.jpg';
import speaker6 from './assets/images/contents/speaker6.jpg';
import speaker7 from './assets/images/contents/speaker7.jpg';

import poster from './assets/images/contents/PosterSCDS2021.jpg';

import sponsor from './assets/images/contents/sponsor.png';

import { Jumbotron } from './components/Jumbotron';

export const Home = () => (
  <div>
    <Helmet>
      <title>The 6th International Conference on Soft Computing in Data Science 2021 (SCDS2021) - Home</title>
      <meta name="description" content="The First and Second International Conference (SCDS2015, SCDS2016) were successfully held in Kuala Lumpur Malaysia." />
      <meta name="keywords" content="home, scds2021, scds 2021, uitm, aaec, shah alam, conference" />
    </Helmet>
     {/* <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2020} alt="wrapkit" height= "1400px" width= "1000px"/></NavbarBrand> */}
    <title>The 6th International Conference on Soft Computing in Data Science 2021 (SCDS2021) - Home</title>
    <br/><Jumbotron /> <br/>
    <h2>Introduction</h2>
      <p style={{ textAlign:'justify'}}>The First and Second International Conference (SCDS2015, SCDS2016) were successfully held in Kuala Lumpur Malaysia. Subsequently, 
            SCDS2017 was successfully hosted by Universitas Gadjah Mada, Indonesia. 
            Chulalongkorn University successfully hosted SCDS2018 from 15-16 August 2018. In 2019, Kyushu Institute of Technology (KYUTECH), Iizuka, Japan successfully 
            hosted SCDS2019 from 28-29 August 2019.</p>
      <p style={{ textAlign:'justify'}}>The 6th International Conference on Soft Computing in Data Science 2021 (SCDS2021) will be hosted virtually by IBDAAI 
            (Institute for Big Data Analytics and Artificial Intelligence), UiTM,  with the collaborations of RENEU (Research Nexus), UiTM, Fakulty Science Computer and 
            Mathematics, UiTM and Departemen Statistika, Fakultas Sains dan Analitika Data, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia from 2-3 November 2021. 
            The theme of the conference is ‘Science in Analytics: 
            Harnessing Data and Simplifying Solutions’. SCDS2021 have invited renowned international and local keynote speakers who are academia or practitioners to share 
            their knowledge and experience in the area in the applications of 
            soft computing in various disciplines. This conference aims to provide a platform for researchers and practitioners to share their research work and to create 
            rigorous international research collaborations.</p>
      <p style={{ textAlign:'justify'}}>SCDS2021 targets participants from universities, government agencies and industries with the ultimate aim of bridging the gap between 
            academia and the industry. Research collaborations between the academia and industry 
            can lead to the advancement of useful analytics and computing applications for providing real time insights and solutions.</p>
    <p style={{ textAlign:'justify'}}>All accepted and registered papers of SCDS2021 will be published in the renowned series of "Communications in Computer and Information 
            Science series" by Springer Verlag.</p>

    <Container>
      <Row>
        <Col lg="5" className="m-b-30">                                              
          <img src={img1} alt="img" className="img-responsive img-rounded" width="250" />
          <p className="m-t-15 m-b-0"></p>
        </Col>                     
      </Row>
     </Container> 

     <p style={{ textAlign:'justify'}}>The SCDS2015, SCDS2016, SCDS2017, SCDS2018 and SCDS2019 proceedings were published in the Communications in Computer and 
                                    Information Science series which is abstracted (indexed) by DBLP
                                    , EI, Scopus and were submitted for the inclusion in ISI Proceedings. Authors of accepted papers will be invited to submit extended paper to: </p>

                                    <p>{'\u2022'} Applied Soft Computing, Elsevier.(Q1: Fast Track Submission) </p>
                                    <p>{'\u2022'} Journal of Information and Communication Technology (JICT) <br/> &nbsp; 
                                    (uum.edu.my) (Q2) </p>
                                    <p>{'\u2022'} Pertanika Journal of Science and Technology (with additional publication charge of RM750) <br/> &nbsp;  
                                    http://pertanika.upm.edu.my/JST.php (Q3) </p>

                                    <NavbarBrand><img src={book1} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand>
                                    <NavbarBrand><img src={book2} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand>
                                    <NavbarBrand><img src={book4} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand> <br/> <br/>

                                    <h2>Keynote Speakers</h2>    <br/> 
                                    <Container style={{width: '100%'}}>                
                    {/* <Row className="justify-content-center">         
                        <h1 className="title font-bold">Keynote Speaker</h1> 
                    </Row> */}
                    <Row style={{justifyContent: 'space-between', justifyItems:'space-between'}}>   

                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker7} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Ybhg Dato' Sri Dr Uzir Mahidin <br/></Card.Title>
                            <Card.Text>
                                Chief Statistician Malaysia  <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                Big Data Analytics, Economics <br/> <br/>
                                 {/* <Card body className="card-shadow" style={{justifyContent:'space-around', justifyItems:'space-around', display:'flex'}}> */}
                                    <Button style={{justifyContent:'space-around'}} href="https://www.iaos-isi.org/index.php/executive-committee-members-2017-2019/201-mohd-uzir-mahidin-member" target="_blank">Abstract</Button>
                                 {/* </Card>  */}
                            </Card.Text>
                            </Card.Body>
                        </Card>   
                        
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker1} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Professor Dr. Guan-Hua, Huang <br/></Card.Title>
                            <Card.Text>
                                Institute of Statistics, <br/> National Chiao Tung University, Taiwan. <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                Aging, Nursing, Schizophrenia, Diabetes, Sensory Impairments (hearing, vision, olfaction), Data Science <br/> <br/>
                                 {/* <Card body className="card-shadow" style={{justifyContent:'space-around', justifyItems:'space-around', display:'flex'}}> */}
                                    <Button style={{justifyContent:'space-around'}} href="http://ghuang.stat.nctu.edu.tw/" target="_blank">Abstract</Button>
                                 {/* </Card>  */}
                            </Card.Text>
                            </Card.Body>
                        </Card> 
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker4} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Associate Professor Dr.rer.pol. Heri Kuswanto <br/></Card.Title>
                            <Card.Text>
                                Faculty of Science and Data Analytics, <br/> Institute Teknologi Sepuluh Nopember, Indonesia. <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                Computational Statistics, Econometrics, Extreme Weather and Climate  <br/> <br/>
                                {/* <Card body className="card-shadow" style={{justifyContent:'center', justifyItems:'center'}}> */}
                                    <Button style={{justifyContent:'center'}} href="https://geoengineering.environment.harvard.edu/people/heri-kuswanto" 
                                        target="_blank">Abstract</Button>
                                {/* </Card> */}
                            </Card.Text>
                            </Card.Body>
                        </Card>       
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker5} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Associate Professor Dr. Aiden Doherty <br/></Card.Title>
                            <Card.Text>
                                Group Leader, <br/> Oxford Big Data Institute Oxford University, UK. <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                Wearable Sensors, Machine Learning, Genomics <br/> <br/>
                                {/* <Card body className="card-shadow" style={{justifyContent:'center', justifyItems:'center'}}> */}
                                    <Button style={{justifyContent:'center'}} href="https://www.ndph.ox.ac.uk/team/aiden-doherty" target="_blank">Abstract</Button>
                                {/* </Card> */}
                            </Card.Text>
                            </Card.Body>
                        </Card>     

        
                        
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker3} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Associate Professor Dr Simon Fong <br/></Card.Title>
                            <Card.Text>
                                Information Science Department, <br/> University of Macau, China. <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                E-Commerce, Data Mining, Business Intelligence, Intelligent Agent Technology, Electronic Governance, Optimization Algorithms <br/> <br/>
                                {/* <Card body className="card-shadow" style={{justifyContent:'center', justifyItems:'center'}}> */}
                                    <Button style={{justifyContent:'center'}} href="https://www.simonjamesfong.com/" target="_blank">Abstract</Button>
                                {/* </Card> */}
                            </Card.Text>
                            </Card.Body>
                        </Card>      

                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker2} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Professor Dr. Richard Millham <br/></Card.Title>
                            <Card.Text>
                                Faculty of Accounting and Informatics, <br/> Durban University of Technology Kwazulu Natal, South Africa. <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                Software and data evolution, Cloud Computing, Big Data, Bio-inspired Algorithms, IOT <br/> <br/>
                                {/* <Card body className="card-shadow" style={{justifyContent:'center', justifyItems:'center'}}> */}
                                    <Button style={{justifyContent:'center'}} href="https://www.dut.ac.za/space_science/prof_millham/" target="_blank">Abstract</Button>
                                {/* </Card> */}
                            </Card.Text>
                            </Card.Body>
                        </Card> 
                                    
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={speaker6} width="100px" height="220px"/>
                            <Card.Body>
                            <Card.Title>Dr. Ubydul Haque <br/></Card.Title>
                            <Card.Text>
                                Assistant Professor, Biostatistics & Epidemiology, <br/>
                                Department of Bio-Statistics and Epidemiology, <br/> University of North Texas Health Science Center. <br/><br/> <u><b>Research Areas</b></u><br/><br/>     
                                Spatial epidemiology, Statistical Modeling, Big Data Analytics <br/> <br/>
                                {/* <Card body className="card-shadow" style={{justifyContent:'center', justifyItems:'center'}}> */}
                                    <Button style={{justifyContent:'center'}} href="https://www.unthsc.edu/school-of-public-health/dr-ubydul-haque/" target="_blank">Abstract</Button>
                                {/* </Card> */}
                            </Card.Text>
                            </Card.Body>
                        </Card>   

                        <Card style={{ width: '15rem' }}>
                           
                        </Card>                                                                                         
                    </Row>  
                </Container>   

                <br/>    
                <a href={poster} target="_blank">Poster SCDS 2021</a> 
                <br/>    

                <br/>       
                {/* <NavbarBrand href="/"><img flex="1" alignSelf="stretch" src={sponsor} alt="wrapkit" height= "undefined," width= "undefined,"/></NavbarBrand>
                     */}
                <Container>
                    <Row>
                        <Col>
                            <img src={sponsor} height="100%" width="100%"/>
                        </Col>
                    </Row>                 
                </Container>                       
  </div>
)


