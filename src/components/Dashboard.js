import {Avatar, Button, Card, Flex, Input, Layout, Progress, Select, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {BrowserView, MobileView} from "react-device-detect";

const Dashboard = () => {
    const {Title} = Typography
  return(
      <>
          <BrowserView style={{height: "100%", width: "100%"}}>
              <Layout style={{justifyContent: "space-around", alignItems: "center", height: "100%"}}>
                  <Flex style={{
                      width: "90%",
                      height: "10%",
                      justifyContent: "space-between",
                      alignItems: "center"
                  }}>
                      <Flex style={{flexDirection: "column"}}>
                          <Title level={2}>My dashboard</Title>
                          <Title level={4}>Welcome, Yunis!</Title>
                      </Flex>
                      <Flex style={{
                          alignItems: "center"
                      }}>
                          <Avatar size="large" icon={<UserOutlined />} />
                          <Select
                              defaultValue="lucy"
                              style={{
                                  width: 120,
                                  marginLeft: 10
                              }}
                              bordered={false}
                              onChange={() => {}}
                              options={[
                                  {
                                      value: 'jack',
                                      label: 'Jack',
                                  },
                                  {
                                      value: 'lucy',
                                      label: 'Lucy',
                                  },
                                  {
                                      value: 'Yiminghe',
                                      label: 'yiminghe',
                                  },
                                  {
                                      value: 'disabled',
                                      label: 'Disabled',
                                      disabled: true,
                                  },
                              ]}
                          />
                      </Flex>
                  </Flex>
                  <Flex
                      style={{
                          width: "90%",
                          height: "75%",
                          alignItems: "center",
                          justifyContent: "space-around"
                      }}
                  >
                      <Flex style={{flexDirection: "column", width: "45%", justifyContent: "space-between", height: "90%"}}>
                          <Card
                              style={{
                                  width: "100%",
                                  height: "48%",
                              }}
                              bodyStyle={{
                                  width: "100%",
                                  height: "80%",
                              }}
                          >
                              <Typography style={{fontSize: 20, marginBottom: 20}}>Topic`s progress</Typography>
                              <Flex style={{
                                  height: "100%",
                                  width: "100%",
                                  flexDirection: "column",
                                  overflowY: "overlay",
                              }}>
                                  {[1,1,,1,1,1,,1,1,,1,1,1,,1,1,,1,1,,1,1,,1,1,,1,1,,1,,1,1,,1,1,1,,1,
                                      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,].map(()=> (
                                      <Flex style={{width: "100%"}}>
                                          <Typography style={{width: "30%"}}>Topic`s progress</Typography>
                                          <Progress style={{width: "65%"}} percent={99.9} strokeColor={{
                                              '0%': '#108ee9',
                                              '100%': '#87d068',
                                          }} />
                                      </Flex>
                                  ))}
                              </Flex>
                          </Card>
                          <Card
                              style={{
                                  width: "100%",
                                  height: "48%",
                                  alignItems: "center"
                              }}
                              bodyStyle={{
                                  width: "100%",
                                  height: "100%",
                                  alignItems: "center",
                                  display: "flex"
                              }}
                          >
                              <Flex style={{alignItems: "center"}}>
                                  <Progress
                                      type="circle"
                                      percent={40}
                                      steps={{
                                          count: 10,
                                          gap: 4,
                                      }}
                                      trailColor="rgba(0, 0, 0, 0.06)"
                                      strokeWidth={20}
                                      style={{
                                          marginRight: 20
                                      }}
                                  />
                                  <Flex style={{flexDirection: "column"}}>
                                      <Typography style={{fontSize: 46, fontWeight: "bold"}}>Total progress</Typography>
                                      <Typography style={{fontSize: 20}}>Completed words: 40/102</Typography>
                                  </Flex>
                              </Flex>
                          </Card>
                      </Flex>
                      <Card
                          style={{
                              width: "45%",
                              height: "90%",
                              flexDirection: "column",
                          }}
                          bodyStyle={{
                              width: "100%",
                              height: "100%",
                              flexDirection: "column",
                              display: "flex",
                              justifyContent: "space-between"
                          }}
                      >
                          <Card bordered={false} style={{width: "100%", height: "20%", flexDirection: "column"}}>
                              <Typography style={{fontSize: 20, fontWeight: "bold"}}>My profile</Typography>
                              <Typography>Last login: ////</Typography>
                              <Typography>Yunis Veliyev</Typography>
                          </Card>
                          <Card bordered={false} style={{width: "100%", height: "70%", display: "flex", justifyContent: "center", flexDirection: "row"}}
                                bodyStyle={{width: "100%", height: "90%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                              <Avatar size={120} icon={<UserOutlined />} />
                              <Flex style={{flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 20}}>
                                  <Flex style={{flexDirection: "column", width: "45%", height: "100%"}}>
                                      <Input size={"large"} placeholder="Outlined" style={{marginTop: 10, marginBottom: 10}}/>
                                      <Input size={"large"} placeholder="Outlined" style={{marginTop: 10, marginBottom: 10}}/>
                                      <Input size={"large"} placeholder="Outlined" style={{marginTop: 10, marginBottom: 10}}/>
                                  </Flex>
                                  <Flex style={{flexDirection: "column", width: "45%", height: "100%"}}>
                                      <Input size={"large"} placeholder="Outlined" style={{marginTop: 10, marginBottom: 10}}/>
                                      <Input size={"large"} placeholder="Outlined" style={{marginTop: 10, marginBottom: 10}}/>
                                      <Input size={"large"} placeholder="Outlined" style={{marginTop: 10, marginBottom: 10}}/>
                                  </Flex>
                              </Flex>
                              <Button style={{marginTop: 20, alignSelf: "flex-end"}} size={"large"} type="primary">Save</Button>
                          </Card>
                      </Card>
                  </Flex>
              </Layout>
          </BrowserView>
          <MobileView>
              <Typography>ediwjdiwdj</Typography>
          </MobileView>
      </>
  )
}

export default Dashboard