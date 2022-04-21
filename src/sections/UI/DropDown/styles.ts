import styled from "styled-components";

export const DropDownMenu = styled.div`
  .menu-links{
    cursor: pointer;
  }

  .menu-links div{
    width: 32px;
    height: 2px;
    background-color: var(--color-text);
    margin: 8px;
    transition: 0.3s;
  }

  .flash.active{
    transform: translateX(0);
  }

  @keyframes navLinkFade{

    from{
        opacity: 0;
        transform: translateX(50px);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }

  }

  .menu-links.active .line1{
    transform: rotate(-45deg) translate(-8px, 8px)
    
  }

  .menu-links.active .line2{
    opacity: 0;
    
  }

  .menu-links.active .line3{
    transform: rotate(45deg) translate(-5px, -7px)    
  }

  .flash{
    position: absolute;
    top: 0;
    right: 0; 
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-panel);
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .flash .sociais-header ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    gap: 40px;
  }

  .flash .sociais-header ul li{
    transition: transform 0.5s;
  }


  .flash .sociais-header ul li a{
    font-size: 4.0rem;
    color: var(--color-headings);
  }

  .menu-links{
    z-index: 99;
  }
`;
