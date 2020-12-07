import './App.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {Button} from '@material-ui/core';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import { Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { palette } from '@material-ui/system';
import { FindInPage } from '@material-ui/icons';

function App() {
  return (
    <div className="App" style={{ margin: '170px'}}>
      <Box display="flex" flexDirection="row" justifyContent="space-around" border={1} borderColor="grey.500" borderRadius={10}>
        <Box className="left" display="flex" flexDirection="column" justifyContent="space-around" borderColor="grey.500" borderRight={1} width="40%" padding={3}>
          <Box display="flex" flexDirection="row" justifyContent="space-around" color= "text.disabled" >
            <CheckBoxOutlineBlankIcon style={{marginRight: "20px"}}/>
            {/* <Box display="flex" flexDirection="row" justifyContent="space-around"> */}
            <ThumbUpOutlinedIcon/>
            <ChatOutlinedIcon/>
            <MailOutlineIcon />
            <ThumbDownOutlinedIcon/>
            {/* </Box > */}
            <MoreVertIcon style={{marginLeft: "20px"}}/>
          </Box>
          <Box display='flex' flexDirection='column' alignContent="flex-start">
            <h3 className=".MuiTypography-alignLeft">Jaseem Umar M</h3><br />
            <Box color="text.disabled"><span>India github.com/mjaseem</span><span>More...</span></Box>
            <Box color="info.main"><span>Application Developer</span> <span>Software Quality Assurance</span></Box> 
          </Box>
          <Box>
            <p>Candidate Caliberation Score</p>
            <span>88%</span>
          </Box>
          <Box>
            <Box p={1} bgcolor="grey.300">Add Tag <AddIcon /></Box>
            <span>0 activities</span>
            <span>Added on February 24th 2020</span><br />
            <span>since last visit</span>
            <span>by You via Retargets</span>
          </Box>
        </Box>
        <Box className="right" display="flex" flexDirection="column" justifyContent="space-around" width="60%" padding={3}>
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <p>Experience</p>
            <FindInPageOutlinedIcon/>
            <span>Could not find information</span><br />
            <span>View Resume</span>
          </Box>
          <Box>
            <p>Education</p>
            <span>Engineering</span><span>2019</span><br />
            <span>Tier 2</span><span>B.Tech in Computer Science and Engineering</span><br />
            <span>Cpi</span>
          </Box>
          <Box>
            <p>Skills</p>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <p>JavaScript Python Java Spring Framework Provisioning Software WebRTC</p>
            <p>Cloud Django ARM VoIP PHP Neural Network Image Recognition C++</p>
            <p>Artifical Intelligence Beta J2EE</p>
          </Box>
        </Box>
      </Box>

    </div>
  );
}

export default App;
