import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import Tasks from '../components/Tasks';
import TransactionCard from '../components/TransactionCard';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Super Finti - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="icon" href="/logo-dashboard.png" />
      </Head>

      <Content>
        <Sidebar>

          {/* Logo */}
          <LogoContainer>
            <img src="logo-dashboard.png" width="50" alt="Logo" />
            <a href="#">Super Finti</a>
          </LogoContainer>

          <Navigation>
            <HeaderNavigation>Main Navigation</HeaderNavigation>
            <List>
              <li>
                <IconContainer>
                  <i class='bx bxs-dashboard'></i>
                  <a href="">Dashboard</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
              </li>
              <li>
                <IconContainer>
                <i class='bx bx-scan' ></i>
                <a href="">Transactions</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
                </li>
              <li>
                <IconContainer>
                <i class='bx bx-conversation' ></i>
                <a href="">Contacts</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
                </li>
              <li>
                <IconContainer>
                <i class='bx bxs-toggle-left' ></i>
                <a href="">Features</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
                </li>
              <li>
                <IconContainer>
                <i class='bx bx-library' ></i>
                <a href="">Library</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
              </li>
            </List>

             <HeaderNavigation>Settings & Schedules</HeaderNavigation>
             <List>
              <li>
                <IconContainer>
                <i class='bx bx-wallet' ></i>
                <a href="">Base Wallet</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
              </li>
              <li>
                <IconContainer>
                <i class='bx bxs-folder-open' ></i>
                <a href="">My Contacts</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
              </li>
              <li>
                <IconContainer>
                <i class='bx bx-microphone' ></i>
                <a href="">Invoices</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
              </li>
              <li>
                <IconContainer>
                <i class='bx bx-calendar-alt' ></i>
                <a href="">Schedules</a>
                </IconContainer>
                <i class='bx bx-chevron-right' ></i>
              </li>
            </List>
          </Navigation>

          <HelpCenter>
            <HelpCenterIconContainer>
              <i class='bx bx-question-mark' ></i>
            </HelpCenterIconContainer>

            <HelpCenterInfo>
              <HelpCenterHeader>Help Center</HelpCenterHeader>
              <p>Having trouble in Finti. Please contact us for more questions</p>
            </HelpCenterInfo>

            <HelpCenterBtn href="#">Go To Help Center</HelpCenterBtn>
            
          </HelpCenter>

        </Sidebar>

        <Main>
          <Navbar>

            <Nav>
              <Form action="">
                <i class='bx bx-search' ></i>
                <input type="text" placeholder='Search...' />
              </Form>

              <IconContainerNavbar>
                <p><i class='bx bx-paper-plane' ></i></p>
                <p><i class='bx bx-envelope'></i></p>
                <p><i class='bx bx-dots-vertical-rounded' ></i></p>
              </IconContainerNavbar>

              <SubMenu>
                <a href="">Wallet</a>
                <a href="">Invoice</a>
              </SubMenu>

              <UserProfile>
                <UserName>Hi, Shakir</UserName>
                <Profile src="https://pbs.twimg.com/profile_images/1537677628039380992/i3uUfk-Z_400x400.jpg" alt="User Profile" />
              </UserProfile>
            </Nav>

          </Navbar>

          <CardsContainer>

            <Card>
              <CardHeader>
                <Heading>Your Working Balance</Heading>
                <Info>Saving Account</Info>
              </CardHeader>
              <CardBody>
                <CardBalance>PKR 9,250,000</CardBalance>
                <InfoBalance>PKR <i class='bx bxs-chevron-down' ></i></InfoBalance>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading>Your Saving Status</Heading>
                <Info>
                  <i class='bx bx-question-mark' ></i>
                </Info>
              </CardHeader>
              <CardBodySaving>
                <IconCardContainer>
                  <i class='bx bx-cube' ></i>
                </IconCardContainer>
                <InfoBalance>
                  <Percentage>4.28%</Percentage>
                  <p>Your spending increased</p>
                </InfoBalance>
              </CardBodySaving>
            </Card>

            <Card>
              <CardHeader>
                <Heading>CARD NUMBER</Heading>
                {/* <Info>Saving Account</Info> */}
              </CardHeader>
              <CardBody>
                <CardNumber>3829 4820 4629 5025</CardNumber>
                <InfoBalance></InfoBalance>
              </CardBody>
            </Card>

          </CardsContainer>

          <Border />

          <ContainerTasks>
            <Tasks title={"Task in Progress"} number1={210} number2={23} color="#E98E75" />
            <Tasks title={"Task Completed"} number1={185} number2={45} color="#4F4798" />
            <Tasks title={"Monthly Tasks Summary"} number1={1240} number2={145} color="#6CDABE"  />
          </ContainerTasks>

          <Border />

          <TransactionMainContainer>

            <TransactionsContainer>

              <TransactionHeader>
                <p>Latest Transactions</p>

                <div>
                  <i class='bx bx-search' ></i>
                  <i class='bx bx-filter' ></i>
                </div>
              </TransactionHeader>

              <DateTransaction>Mon, Mar 1</DateTransaction>

              <div>

                  <BoxContainer>
                    <BoxTransaction>
                      <BoxIcon><i class='bx bxs-send' ></i></BoxIcon>
                      <p>Payment Sent to Shakir</p>
                    </BoxTransaction>

                    <p>$560.00</p>
                  </BoxContainer>

                  <BoxContainer>
                    <BoxTransaction>
                      <BoxIcon><i class='bx bxs-send' ></i></BoxIcon>
                      <p>Salary from Redwhale</p>
                    </BoxTransaction>

                    <p>$12,200.00</p>
                  </BoxContainer>

                  <BoxContainer>
                    <BoxTransaction>
                      <BoxIcon><i class='bx bxs-send' ></i></BoxIcon>
                      <p>Money Sent to Wise.com</p>
                    </BoxTransaction>

                    <p>$3,000.00</p>
                  </BoxContainer>

              </div>

              <DateTransaction>Mon, Mar 1</DateTransaction>

              <div>

                  <BoxContainer>
                    <BoxTransaction>
                      <BoxIcon><i class='bx bxs-send' ></i></BoxIcon>
                      <p>Purchased Macbook Pro</p>
                    </BoxTransaction>

                    <p>$560.00</p>
                  </BoxContainer>
              </div>
            
            </TransactionsContainer>

            <UpcomingTransactionContainer>
              <TransactionHeader>
                <p>Upcoming Transactions</p>

                <div>
                  <ViewAll>View All</ViewAll>
                </div>
              </TransactionHeader>

              <DateTransaction>Today</DateTransaction>

              <TransactionCard icon="bx bx-water" title={"Water Bill"} status="Unsuccessfully" price={-280} color="#342FAC" />

              <DateTransaction>Tomorrow</DateTransaction>

              <TransactionCard icon={"bx bxs-dollar-circle"} title={"Income: Salary Oct"} status="Succussfully" price={1200} color="#E8546E" />
              <TransactionCard icon={"bx bx-cloud-lightning"} title={"Electric Bill"} status="Succussfully" price={-480} color="#4592F2" />
              <TransactionCard icon={"bx bx-file"} title={"Income: Jane Transfers"}status="Succussfully" price={500} color="#F2B054" />
              <TransactionCard icon={"bx bx-file"} title={"Income: Jane Transfers"} status="Succussfully" price={500} color="#F2B054" />

            </UpcomingTransactionContainer>

          </TransactionMainContainer>

        </Main>
      </Content>

    </div>
  )
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 5px;
  }
`;

const CardNumber = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

const CardBodySaving = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Percentage = styled.p`
  font-weight: 700;
  color: #D4493D;
  font-size: 25px;
  margin-bottom: -20px;
`;

const IconCardContainer = styled.div`
  background: #F7D6D0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px !important;
  margin-top: 15px;
  margin-right: 20px;

  i {
    color: #E64034;
    font-size: 30px;
  }
`;

const ContainerTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const UpcomingTransactionContainer = styled.div`
  padding: 25px;
  margin: 20px 0;
`;

const ViewAll = styled.p`
  font-weight: 600;
  font-size: 13px;
  color: #C5C9C8;
  margin-left: 30px;
`;

const TransactionMainContainer = styled.div`
  display: flex;
`;

const TransactionsContainer = styled.div`
  width: 47vw;
  margin: 20px 50px;
  border-radius: 10px;
  padding: 25px;
  background-color: #FCFAFE;
`;

const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 20px;
    
    :nth-child(1) {
      margin-right: 20px;
    }
  }

  p {
    font-weight: 700;
  }
`;

const DateTransaction = styled.p`
  color: #C5C9C8;
`;

const IconContainerNavbar = styled.div`
  display: flex;

  i {
    color: #34373F;
    font-size: 20px;
    margin-right: 15px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    font-weight: 600;
  }

`;

const BoxTransaction = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 400;
  }
`;

const BoxIcon = styled.div`
  background: #E5ECF4;
  padding: 10px 5px;
  width: 35px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 15px;
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.p`
  font-weight: 700;
`;

const Profile = styled.img`
  width: 50px;
  border-radius: 100%;
  margin-left: 20px;
`;

const Content = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: #F6F7FD;
  width: 20vw;
  padding: 30px;
  border-right: 1px solid rgba(79,72,150,.1);
`;

const Border = styled.hr`
  color: rgba(79,72,150,.1);
  border-top: 1px solid rgba(79,72,150,.1);
  margin: 20px 50px;
`;

const Main = styled.div`
  width: 80vw;
`;

const List = styled.ul`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  li {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 15px 0 15px -40px;
    font-size: 0.95rem;
    color: #B8B9C2;
    justify-content: space-between;

    i {
      margin-right: 15px;
      font-size: 20px;
      color: #4F4896;
    }

    a {
      transition: .5s;
    }

    a:hover {
      color: #4F4896;
    }
  }

`;

const Navigation = styled.div`
  margin-top: 50px;
  margin-left: 10px;
`;

const HeaderNavigation = styled.p`
  color: #6F7285;
  font-weight: 600;

  :nth-child(2) {
    margin-top: 20px;
  }
`;

const Navbar = styled.div`
  background-color: #F6F7FD;
  display: flex;
  width: 100%;
  height: 30vh;
  border-bottom: 1px solid rgba(79,72,150,.1);
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 80vw;
  padding: 0 50px 0 0;
`;

const Form = styled.form`

  background: #FFFEFE;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 15vw;
  border-radius: 10px;
  padding: 0 15px;
  margin: 30px 50px;

  input {
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
  }

  i {
    color: #AFAFBF;
    font-size: 20px;
    margin-right: 10px;
  }

`;

const SubMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin-right: 20px;
    color: #B8B9C2;
    transition: 0.5s;
    font-weight: 600;
  }

  a:hover {
      color: #4F4896;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -120px;
`;

const Card = styled.div`

  border-radius: 15px;
  padding: 25px;
  margin: 0 15px;
  height: 200px;
  width: 23vw;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;

  :nth-child(1) {
    background-image: linear-gradient(to right top, #f7efe2, #f9ebe3, #f8e9e5, #f4e7e7, #efe5e9, #ede4ea, #eae3eb, #e6e2ec, #e5e1ee, #e3e1f1, #e1e0f3, #dee0f6);
  }

  :nth-child(2) {
    background-image: linear-gradient(to right, #fbeed2, #fcedd4, #fcecd6, #fcebd8, #fceada, #fde9dc, #fde8dd, #fde7df, #fee5e1, #fde4e4, #fce3e8, #f9e2eb);
  }

  :nth-child(3) {
   background-image: linear-gradient(to right, #e2fac5, #e1fac8, #e0f9cc, #dff9cf, #def8d2, #dff8d5, #dff8d8, #e0f8db, #e3f9df, #e6fae3, #e9fae7, #ecfbeb);
  }

`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const CardBalance = styled.p`
  color: #09090A;
  font-size: 2rem;
  font-weight: 700;
`;

const InfoBalance = styled.p`
  font-size: 0.85rem;
`;

const Heading = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
`;

const Info = styled.p`
  font-size: 0.85rem;
  color: #AFAFBF;
  font-weight: 700;
  text-decoration: underline;

  i {
    font-size: 1.2rem;
    background-color: #AFAFBF;
    border-radius: 100px;
    color: #FFF;
    padding: 5px;
    margin-top: -10px;
  }
`;

const HelpCenter = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  padding: 50px;
  color: #635B55;
  font-size: 0.85rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 50px;
  background-image: linear-gradient(to right top, #f7efe2, #f9ebe3, #f8e9e5, #f4e7e7, #efe5e9, #ede4ea, #eae3eb, #e6e2ec, #e5e1ee, #e3e1f1, #e1e0f3, #dee0f6);
`;

const HelpCenterIconContainer = styled.div`
  background-color: #E78F74;
  /* width: 45px; */
  padding: 10px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid #FFF;
  position: absolute;
  top: -25px;

  i {
    font-size: 2rem;
    color: #FFFF;
  }
`;

const HelpCenterHeader = styled.p`
  color: #635B55;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: -5px;
`;

const HelpCenterInfo = styled.div`
  margin-bottom: 5px;
`;

const HelpCenterBtn = styled.a`
  color: #635B55;
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #FFF;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;