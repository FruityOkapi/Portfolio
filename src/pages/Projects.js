import {Card, Avatar, Carousel, Typography} from 'antd';
import { ChromeOutlined, GithubOutlined } from '@ant-design/icons'
import {intentionalDesc, buddyDesc, steaminDesc, googleBooksDesc} from '../utils/descriptions'

const { Meta } = Card;
const {Text, Title} = Typography;


const styling = {marginTop: '50px', marginBottom: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}
{/* 

<ChromeOutlined />
<GithubOutlined />

*/}


export default function Projects() {


    return (
        <div justify={'center'} style={{minHeight: 'calc(100vh - 140px)', alignItems: "center"}}>
            <Title type="secondary" className="titleFont" style={{fontWeight: '300', textAlign: 'center'}} level={2}>Finished Projects</Title>
            <Carousel dotPosition='top' style={{borderRadius: '4px', backgroundColor: '#ad6800', marginLeft: '40px', marginRight: '40px'}}>
                <div>
                    <div style={styling}>
                        <Card style={{width: '50%'}} cover={<img src='https://i.imgur.com/nOyaSPL.png'></img>} actions={[<a href='https://intentional-health.herokuapp.com/'><ChromeOutlined/></a>, <a href='https://github.com/Pscully21/Project-2-Intentional-Health'><GithubOutlined/></a>]}>
                            <Meta avatar={<Avatar src="https://i.imgur.com/EL1rdqm.jpg" />} title='Intentional Health' description={intentionalDesc}/>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={styling}>
                        <Card style={{width: '70%'}} cover={<img src='https://i.imgur.com/twoXfGZ.png'></img>} actions={[<a href='https://shielded-dawn-35002.herokuapp.com/'><ChromeOutlined/></a>, <a href='https://github.com/jaspersonja/budget-buddy'><GithubOutlined/></a>]}>
                            <Meta avatar={<Avatar src="https://i.imgur.com/EL1rdqm.jpg" />} title='Budget Buddy' description={buddyDesc}/>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={styling}>
                        <Card style={{width: '70%'}} cover={<img src='https://i.imgur.com/EJ19LKJ.png'></img>} actions={[<a href='https://farmfreshyeets.github.io/Steamin-And-Streamin/'><ChromeOutlined/></a>, <a href='https://github.com/FarmFreshYeets/Steamin-And-Streamin'><GithubOutlined/></a>]}>
                            <Meta avatar={<Avatar src="https://i.imgur.com/EL1rdqm.jpg" />} title='Steamin and Streamin' description={steaminDesc}/>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={styling}>
                        <Card style={{width: '70%'}} cover={<img src='https://i.imgur.com/YRGVvtA.png'></img>} actions={[<a href='https://mustreadbooks.herokuapp.com/'><ChromeOutlined/></a>, <a href='https://github.com/FruityOkapi/googlebooks_MERN_app'><GithubOutlined/></a>]}>
                            <Meta avatar={<Avatar src="https://i.imgur.com/EL1rdqm.jpg" />} title='A Google Books MERN app' description={googleBooksDesc}/>
                        </Card>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}