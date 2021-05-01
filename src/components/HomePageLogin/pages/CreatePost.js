import React from 'react';
import '../../../App.css';

// export default function Products() {
//   return <h1 className='createPost'>Create Post</h1>;
// }

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#23471F",
            //backgroundColor: "#1D1B1A",
            // color:"black", 
            //background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%),
            height: 90,
            textAlign: 'center',
            fontSize: 50,
            fontFamily: 'serif',
            color: 'white'
          }}
        >Create Post
          <div>

          </div>          
        </div>
        <form 
          onSubmit={this.mySubmitHandler} 
          style={{markerStart: 50}}
        >
        
          <br/>
          <br/>

          <div 
            style={{
              WebkitMarginStart: 100, 
              fontFamily: 'monospace',
              fontSize:20
              }}
            >
              Title
          </div>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
            style={{
              width: 400,
              height: 30, 
              WebkitMarginStart: 100
            }}
          />

          <br/>
          <br/>

          <div 
            style={{
              WebkitMarginStart: 100, 
              fontFamily: 'monospace',
              fontSize:20
              }}
            >
              Sanskrit Shloka:
          </div>
          <textarea 
            value={this.state.description} 
            style={{
              width: 400,
              height: 40, 
              WebkitMarginStart: 100
            }}
          />

          <br/>
          <br/>

          <div 
            style={{
              WebkitMarginStart: 100, 
              fontFamily: 'monospace',
              fontSize:20
              }}
            >
              Description of the Disease:
          </div>
          <textarea 
            value={this.state.description} 
              style={{
                width: 400,
                height: 40, 
                WebkitMarginStart: 100
              }}
          />

          <br/>
          <br/>

          <div 
            style={{
              WebkitMarginStart: 100,
              fontFamily: 'monospace',
              fontSize:20
              }}
            >
              Precaution:
          </div>
          <textarea 
            value={this.state.description} 
              style={{
                width: 400,
                height: 40, 
                WebkitMarginStart: 100
              }}
          />

          <br/>
          <br/>

          <div 
            style={{
              WebkitMarginStart: 100,
              fontFamily: 'monospace',
              fontSize:20
              }}
            >
              Cure:
          </div>
          <textarea 
            value={this.state.description} 
              style={{
                width: 400,
                height: 40, 
                WebkitMarginStart: 100
              }}
          />

          <div 
          style={{
            WebkitMarginStart: 800,
            marginTop: -300,
            fontFamily: 'monospace',
            fontSize:20
            }} 
            action="upload.php" 
            method="post" 
            enctype="multipart/form-data"
          >
            Image : 
          
            
            <input 
              type="file" 
              name="fileToUpload" 
              id="fileToUpload" 
            />

            <br/>
            <br/>

            <input 
              style={{
                width: 170,
                height: 35,
                backgroundColor: 'lightblue',
                fontFamily: 'monospace',
                fontSize: 20,
                WebkitMarginStart: 78
                }} 
                type="submit" 
                value="Upload Image" 
                name="submit" 
            />
          </div>

          <br/>
          <br/>

          {/* <div class="custom-select" style="width:200px;"> */}
          {/* <div 
            class="custom-select" 
            style=
            {{
              
            }}
          >
            <select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div> */}

          <br/>
          <br/>

          
          <button 
            style={{
              marginTop:120,
              WebkitMarginStart: 1150,
              fontSize:25,
              fontFamily: '-moz-initial',
              backgroundColor: 'green',
              width:120,height:40,
              color: 'white'
            }}
          >Post</button>
        </form>
      </div>
    );
  }
}
 
export default MyForm;
