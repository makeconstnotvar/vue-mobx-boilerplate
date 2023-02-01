<template>
  <Provider {...stores}>
    <BrowserRouter basename='/rick-and-morty'>
      <Layout>
        <Routes>
          <Route path="/" index element={</>}/>
            <Route path="/characters" element={<CharactersPage/>}/>
              <Route path="/locations" element={<LocationsPage/>}/>
                <Route path="/memory" element={<EpisodesPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
</template>

<script setup>


export {router}
</script>
