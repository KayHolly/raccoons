let albums = [
    //pop
     {
        title: "Scream", 
        artist: "Michael Jackson & Janet Jackson",
        artwork: "ScreamMJ.jpg",
        genre: "Pop",
        rating: "10/10",
        rated: "Rated Clean",
    },
       {
          title: "I Lied", 
          artist: "Nicki Minaj",
          artwork: "NMILied.jpg",
          genre: "Pop, Hip Hop, Pop Rap",
          rating: "8/10",
      },
       {
          title: "Bad Romance", 
          artist: "Lady Gaga",
          artwork: "LGBadRomance.jpg",
          genre: "Pop",
          rating: "10/10",
      },
       {
          title: "E.T.", 
          artist: "Katie Parry",
          artwork: "KPE.T.jpg",
          genre: "Pop",
          rating: "10/10",
      },
      //4 more albums
      //R&B
       {
          title: "Can't Take My Eyes Off Of You(I love you Baby)", 
          artist: "Lauryn Hill",
          artwork: "LHILoveYouBaby.jpg",
          genre: "Hip Hop, R&B",
          rating: "10/10",
      },
    //5 albums
       {
          title: "Burn", 
          artist: "Usher",
          artwork: "UBurn.jpg",
          genre: "R&B",
          rating: "10/10",
      },
       {
          title: "Never Knew I Needed", 
          artist: "Ne-Yo",
          artwork: "NYNeverKnewINeeded.jpg",
          genre: "R&B",
          rating: "10/10",
      },
       {
          title: "If I Were a Boy", 
          artist: "Beyoncé",
          artwork: "BIfIWereABoy.jpg",
          genre: "R&B",
          rating: "10/10",
      },
      //4 more albums
      //Rock
       {
          title: "Bohemian Rhapsody", 
          artist: "Queen",
          artwork: "QBohemianRhapsody.jpg",
          genre: "Rock",
          rating: "10/10",
      },
       {
          title: "Holding Out For A Hero", 
          artist: "Bonnie Tyler",
          artwork: "BTHoldingOutForAHero.jpg",
          genre: "Rock",
          rating: "10/10",
      },
    //10 albums
      {
        title: "Y.M.C.A", 
        artist: "Village People",
        artwork: "VPYMCA.jpg",
        genre: "Rock",
        rating: "10/10",
      },
       {
          title: "Dancing Queen", 
          artist: "ABBA",
          artwork: "ADancingQueen.jpg",
          genre: "Rock",
          rating: "10/10",
      },
    //4 more albums 
    // Hip Hop
       {
          title: "Ms. Jackson", 
          artist: "Outkast",
          artwork: "OMs.Jackson.jpg",
          genre: "Hip Hop",
          rating: "10/10",
      },
       {
          title: "S&M", 
          artist: "Rihanna",
          artwork: "RS&M.jpg",
          genre: "Hip Hop",
          rating: "10/10",
      },
       {
          title: "Without Me", 
          artist: "Eminem",
          artwork: "EWithoutMe.jpg",
          genre: "Hip Hop",
          rating: "10/10",
      },
    //15 albums, 
       {
          title: "Gangsta Paradise", 
          artist: "Coolio, L.V.",
          artwork: "CGangstaParadise.jpg",
          genre: "Hip Hop",
          rating: "10/10",
      },
    //4 more albums
       {
          title: "villain", 
          artist: "Stella Jang",
          artwork: "SJVillain.jpg",
          genre: "K-Pop",
          rating: "10/10",
      },
       {
          title: "I Can't Decide", 
          artist: "Scissor Sisters",
          artwork: "SSICantDecide.jpg",
          genre: "Pop Rock",
          rating: "10/10",
      },
       {
          title: "Grind Me Down", 
          artist: "Lilianna Wilde",
          artwork: "LWGrindMeDown.jpg",
          genre: "Meme",
          rating: "10/10",
      },
      {
          title: "Last Surprise", 
          artist: "Lyn",
          artwork: "LLastSuprise.jpg",
          genre: "J-Pop",
          rating: "10/10",
      },
    ]
    //20 albums
    //4 more albums
    
    //say hello to things I dont understand
    function displayAlbums(albums) {
      let albumList = document.getElementById('albumList');
      albumList.innerHTML = ''; 
      albums.forEach(album => {
          let albumDiv = document.createElement('div');
          albumDiv.classList.add('album');
          albumDiv.innerHTML = `
              <img width="150" src="Assets/${album.artwork}" alt="${album.title} artwork">
              <h2>${album.title}</h2>
              <p><strong>Artist:</strong> ${album.artist}</p>
              <p><strong>Genre:</strong> ${album.genre}</p>
              <p><strong>Rating:</strong> ${album.rating}🦝</p>
          `;
          albumList.appendChild(albumDiv);
      });
    }
    
    function filterGenre(genre) {
      let filteredAlbums = albums.filter(album => album.genre.includes(genre));
      displayAlbums(filteredAlbums);
    }
    
    
    displayAlbums(albums);
    