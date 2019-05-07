let user_score = 0;
let computer_score = 0;
const user_score_span = document.getElementById( "user-score" );
const comp_score_span = document.getElementById( "computer-score" );
const scoreBoard_div = document.querySelector( ".score-board" );
const result_p = document.querySelector( ".result > p " );
const rock_div = document.getElementById( "r" );
const paper_div = document.getElementById( "p" );
const scissors_div = document.getElementById( "s" );
const reload_p = document.getElementById( "new-game" );

function convert_name( letter )
{
    if( letter === 'r') return "Rock";
    if( letter === 'p') return "Paper";
    if( letter === 's') return "Scissors";
}

function get_computer_choice()
{
    const choices = [ 'r', 'p', 's' ];
    const random_number = Math.floor( Math.random() * 3 );
    console.log( "Comp choice -> " + choices[ random_number ] );
    return choices[ random_number ];
}

function win(user, computer)
{
    result_p.innerHTML = `${convert_name(user)}  beats ${convert_name(computer)}. You win!`;
    user_score++;
    user_score_span.innerHTML = user_score;
    document.getElementById(user).classList.add('green-glow');
    setTimeout( function() { document.getElementById(user).classList.remove('green-glow')}, 1000 );
}

function tie(user)
{
    result_p.innerHTML = "It's a tie."
    document.getElementById(user).classList.add('grey-glow');
    setTimeout( function() { document.getElementById(user).classList.remove('grey-glow')}, 1000 );
}

function loose( user, computer )
{
    result_p.innerHTML = `${convert_name(computer)} beats ${convert_name(user)}. Computer win!`;
    computer_score++;
    comp_score_span.innerHTML = computer_score;
    document.getElementById(user).classList.add('red-glow');
    setTimeout( function() { document.getElementById(user).classList.remove('red-glow')}, 1000 );
}

function game(userChoice)
{
    console.log( userChoice );
    const computer_choice = get_computer_choice();

    switch( userChoice + computer_choice )
    {
        case "rs":
        case "pr":
        case "sp":
            win( userChoice, computer_choice );
            break;
        case "rr":
        case "ss":
        case "pp":
            tie(userChoice);
            break;
        default:
            loose( userChoice, computer_choice );
            break;
    }

}

function main()
{

    rock_div.addEventListener( 'click', function()
    {
        game("r");
    })

    paper_div.addEventListener( 'click', function()
    {
        game("p");
    })

    scissors_div.addEventListener( 'click', function()
    {
        game("s");
    })

    reload_p.addEventListener( 'click', function() { location.reload(); } )
}

main();