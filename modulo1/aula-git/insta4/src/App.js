import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'leonardo'}
            fotoUsuario={'https://w7.pngwing.com/pngs/854/560/png-transparent-businessperson-company-corporation-organization-handsome-company-service-people.png'}
            fotoPost={'https://www.lopes.com.br/blog/wp-content/uploads/2020/06/shutterstock_715242859.jpg'}
          />
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://e7.pngegg.com/pngimages/936/766/png-clipart-businessperson-business-plan-management-business-company-people.png'}
            fotoPost={'https://www.pngkey.com/png/full/155-1557648_light-ocean-underwater-deep-sea-ostrich-effect-solving.png'}
          />
          <Post
            nomeUsuario={'ricardo'}
            fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasHcIeY4M_o2DK-wXYtQp7qQECkHeEJrTYQ&usqp=CAU'}
            fotoPost={'https://www.trt16.jus.br/sites/portal/files/fields/noticia/2019-12_img-principal-5325_id2845.jpg'}
          />
          <Post
            nomeUsuario={'fabiana'}
            fotoUsuario={'https://upload.wikimedia.org/wikipedia/commons/1/19/Face-perfil.png'}
            fotoPost={'https://canadasegundoosbrasileiros.files.wordpress.com/2014/09/photo-2014-09-01-14-57-54.jpg'}
          />
        </MainContainer>
)
}


export default App;
