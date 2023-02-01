<template>
  <Provider {...stores}>
    <BrowserRouter basename='/admin'>
      <Layout>
        <Routes>
          <Route path="/" index element={<LandingPage/>}/>
            <Route path="/page1" element={<Page1/>}/>
              <Route path="/page2" element={<Page2/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
</template>

<script setup>


</script>

