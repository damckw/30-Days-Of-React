import { cardStyle, inputStyle, buttonStyle } from "./style";


const cardText = {
  title: 'Subscribe',
  description: 'Sign up with you email address to receive news and updates.'
}

export const Card = (
      <div style={cardStyle}>
        <h2 style={{fontWeight: 'normal'}}>{cardText.title}</h2>
        <p>{cardText.description}</p>
        <div style={{marginTop: '30px'}}>
          <input style={inputStyle} type="text" placeholder="First name"></input>
          <input style={inputStyle} type="text" placeholder="Last name"></input>
          <input style={inputStyle} type="text" placeholder="Email"></input>
        </div>
        <button style={buttonStyle}>Subscribe</button>
      </div>
  );