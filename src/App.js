import logo from './logo.svg';
import './App.css';
import {BottomNavigation} from "reactjs-bottom-navigation";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined, UserOutlined,
} from '@ant-design/icons';
import {useState} from "react";
import {Avatar, Button, Card, Divider, Flex, Input, Layout, Menu, Progress, Select, Typography} from "antd";
import {BrowserView, MobileView} from "react-device-detect";
import {Content} from "antd/es/layout/layout";
import {Link, Outlet} from "react-router-dom";

const  bottomNavItems = [
  {
    title:  "Home",
    onClick: ({ id }) =>  alert("menu clicked " + id),
    icon: <div />, // just for example
    activeIcon: <div color="#fff" />
  },

  // items can have either title, icon or both or neither!
  {
  },
  {
    title:  "Search",
  },
  // the render method enables custom item content
  {
    render: ({ isActive, id }) =>  isActive ? <strong>{id}</strong> : <span>{id}</span>,
  },
];

const App = () => {
  const { Title } = Typography;

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: <Link to={"dashboard/"}>Dashboard</Link>,
    },
    {
      key: 'sub1',
      label: 'Challenge',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '5',
          label: <Link to={"rta/"}>Russian to Arabic</Link>,
        },
        {
          key: '6',
          label: <Link to={"atr/"}>Arabic to Russian</Link>,
        },
      ],
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: <Link to={"dictionary/"}>Dictionary</Link>,
    },
  ];

  return (
      <>
        <BrowserView style={{display: "flex", width: "100%",
          height: "100vh",backgroundColor: "#001529",}}>
          <Layout style={{
            width: "100%",
            height: "100%",
            flexDirection: "row"
          }}>
            <Flex style={{
              width: 256,
              height: "100%",
              flexDirection: "column",
              backgroundColor: "rgb(0, 21, 41)"
            }}>
              <Flex
                  style={{
                    flexDirection: "column",
                    backgroundColor: "#001529",
                    height: "100%",
                    alignItems: "center"
                  }}
              >
                <Title level={3}>learnArabic</Title>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    items={items}
                />
              </Flex>
            </Flex>
            <Divider style={{height: "100%"}} type={"vertical"} />
            <Outlet />
          </Layout>
        </BrowserView>
        <MobileView>
          <Flex style={{
            width: "100%",
            height: "100vh",
            flexDirection: "column",
            backgroundColor: "rgb(0, 21, 41)"
          }}>
            <Outlet />
            <BottomNavigation
                items={bottomNavItems}
                selected={0}
                onItemClick={(item) =>  console.log(item)}
                activeBgColor="slateBlue"
                activeTextColor="white"
            />
          </Flex>
        </MobileView>
      </>
  );
}

export default App;
