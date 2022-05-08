import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function CNNConceptPage() {
  return (
    <Box m={2} pt={5}>
      <Container maxWidth="md" component="main" id="cnn-concept-div">
        <Card sx={{backgroundColor: "#f5f5dc"}}>
          <CardMedia
            component="img"
            height="300"
            image="/imgs/cnn-banner1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Convolutional Neural Network (CNN)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Deep learning has become an area of interest to the researchers in
              the past few years. Convolutional Neural Network (CNN) is a deep
              learning approach that is widely used for solving complex
              problems. It overcomes the limitations of traditional machine
              learning approaches.It  take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image and be able to differentiate one from the other.
            </Typography>
            <Typography variant="h6" align="left" color="text.secondary">
              Basic Architectures              
              </Typography>
              <Typography variant="body2" align="left" color="text.secondary">
              There are two main parts to a CNN architecture:

            <br></br>1. A convolution tool that separates and identifies the various features of the image for analysis in a process called as Feature Extraction
            <br></br>2. A fully connected layer that utilizes the output from the convolution process and predicts the class of the image based on the features extracted in previous stages.
              </Typography>
              <Card sx={{}}>
          <CardMedia
            component="img"            
            image="/imgs/cnn1.png"
            alt="green iguana"
          />
          </Card>
            
          <Typography variant="body2" align="left" color="text.secondary">
          <r><br></br></r>There are three types of layers that make up the CNN which are the convolutional layers, pooling layers, and fully-connected (FC) layers. When these layers are stacked, a CNN architecture will be formed
          <br></br></Typography>
          <Typography variant="h6" align="left" color="text.secondary">
              Convolution layer            
              </Typography> 
              <Typography variant="body2" align="left" color="text.secondary">
          <br></br>This layer is the first layer that is used to extract the various features from the input images. In this layer, the mathematical operation of convolution is performed between the input image and a filter of a particular size MxM. By sliding the filter over the input image, the dot product is taken between the filter and the parts of the input image with respect to the size of the filter (MxM).
          The output is termed as the Feature map which gives us information about the image such as the corners and edges. Later, this feature map is fed to other layers to learn several other features of the input image.
          <br></br></Typography>    
            
          <Typography variant="h6" align="left" color="text.secondary">
          Pooling Layer           
              </Typography> 
              <Typography variant="body2" align="left" color="text.secondary">
          <br></br>
          In most cases, a Convolutional Layer is followed by a Pooling Layer. The primary aim of this layer is to decrease the size of the convolved feature map to reduce the computational costs. This is performed by decreasing the connections between layers and independently operates on each feature map. Depending upon method used, there are several types of Pooling operations.
          In Max Pooling, the largest element is taken from feature map. Average Pooling calculates the average of the elements in a predefined sized Image section. The total sum of the elements in the predefined section is computed in Sum Pooling. The Pooling Layer usually serves as a bridge between the Convolutional Layer and the FC Layer
          <br></br></Typography> 
          <Typography variant="h6" align="left" color="text.secondary">
          Fully Connected Layer          
              </Typography> 
              <Typography variant="body2" align="left" color="text.secondary">
          <br></br>
          The Fully Connected (FC) layer consists of the weights and biases along with the neurons and is used to connect the neurons between two different layers. These layers are usually placed before the output layer and form the last few layers of a CNN Architecture.
          In this, the input image from the previous layers are flattened and fed to the FC layer. The flattened vector then undergoes few more FC layers where the mathematical functions operations usually take place. In this stage, the classification process begins to take place.
          <br></br></Typography> 
          <Typography variant="h6" align="left" color="text.secondary">
          Dropout Layer           
              </Typography> 
              <Typography variant="body2" align="left" color="text.secondary">
          <br></br>
          Usually, when all the features are connected to the FC layer, it can cause overfitting in the training dataset. Overfitting occurs when a particular model works so well on the training data causing a negative impact in the model’s performance when used on a new data.
          To overcome this problem, a dropout layer is utilised wherein a few neurons are dropped from the neural network during training process resulting in reduced size of the model. On passing a dropout of 0.3, 30% of the nodes are dropped out randomly from the neural network.<br></br></Typography> 




          </CardContent>
          </Card>
      </Container>
    </Box>
  );
}
