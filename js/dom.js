document.getElementById('apply-bg').addEventListener('click', function () {
    console.log('click');

    const friends = document.getElementsByClassName('friend');
    console.log(friends);
    for (const friend of friends) {
        console.log(friend);
        friend.style.backgroundColor = 'lightblue';
        
    }
})

document.getElementById('text-align').addEventListener('click', function () {

    console.log('clikc');
    // const friendSection = document.getElementById('friend');
    //     const SingleFriend  = document.createElement('div')
    const divSection = document.getElementById('third-div');
    divSection.style.textAlign = 'center';
   

})

document.getElementById('add-friend').addEventListener('click', function () {
    console.log('click')
    const MotherDiv = document.getElementById('friend');
    const newFriend = document.createElement('div');
    newFriend.innerHTML = `

 <h3> hello this is new friend </h3>
  <p> lorem10</p>
    `
    MotherDiv.appendChild(newFriend);
})