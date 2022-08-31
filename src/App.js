import React, { Component } from 'react';
import { Container, Table, Label, Menu, Icon, Grid, Feed, List, Search } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'>
                  <Search placeholder='Search...' />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Name Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell positive>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'>
                  <Menu pagination>
                    <Menu.Item as='a' icon='chevron left' />
                    <Menu.Item as='a' name='1' />
                    <Menu.Item as='a' name='2' />
                    <Menu.Item as='a' name='3' />
                    <Menu.Item as='a' name='4' />
                    <Menu.Item as='a' icon='chevron right' />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <br />
          <Grid>
            <Grid.Column width={10}>
              <Feed size='large'>
                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> added you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' /> 4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label icon='pencil' />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                    </Feed.Summary>
                    <Feed.Date>3 days ago</Feed.Date>
                    <Feed.Extra text>
                      Saya Senang Belajar Bahasa Pemograman
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' /> 11 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new Image
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                      </a>
                      <a>
                        <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' /> 1 Like
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
              <List>
                <List.Item>
                  <List.Header as='h4'>Website Terkait</List.Header>
                </List.Item>
                <List.Item icon='linkify' content={<a href='https://www.google.com/' target='_blank' rel='noopener noreferrer'>Google</a>} />
                <List.Item icon='linkify' content={<a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>Facebook</a>} />
                <List.Item icon='linkify' content={<a href='https://www.semantic-ui.com/' target='_blank' rel='noopener noreferrer'>Semantic UI</a>} />
                <List.Item icon='linkify' content={<a href='https://www.niomic.com/' target='_blank' rel='noopener noreferrer'>Niomic</a>} />
                <List.Item icon='linkify' content={<a href='https://www.reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a>} />
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App;