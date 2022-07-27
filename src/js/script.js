let searchPokemon = 1

function getPokemon(pokemon) {

    $('.pokemon_name').text('Loading ...')
    $('.pokemon_id').text('')

    const APIResponse = $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, renderPokemon).fail(() => {
        $('.pokemon_name').text('Not Found :c')
        $('.pokemon_id').text('')
        $('.pokemon_image').css("display", "none")
    })
}

function renderPokemon(data){
    $('.pokemon_image').css("display", "block")

    $('.pokemon_name').text(data.name)
    $('.pokemon_id').text(`#${data.id}`)
    $('.pokemon_image').attr('src', `${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`)
    searchPokemon = data.id

}

$('.form').submit((event) => {
    event.preventDefault()
    getPokemon($('.search_pokemon').val().toLowerCase())
    
    $('.search_pokemon').val('')
})

$(".btn_next").click(() => {
    searchPokemon += 1
    getPokemon(searchPokemon)
});

$(".btn_prev").click(() => {
    if (searchPokemon > 1) {
        searchPokemon -= 1
        getPokemon(searchPokemon)
    }
});

getPokemon(searchPokemon)
