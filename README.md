# API-CRUD-GO-AND-REACT

[![LinkedIn][linkedin-shield]][linkedin-url]


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/emmanuel-palacio/

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#local-installation">local installation</a></li>
        <li><a href="#Project-mounted-on-a-remote-server">Project mounted on a remote server</a></li>
      </ul>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Creation of a simple web application to record the data of a certain person and you can even search the database if there is a certain user.

### Built With
The back-end part is built with the following technologies

* [Go](https://golang.org/)
* [Mysql](https://www.mysql.com/)
* [Docker](https://www.docker.com/)

The front-end part is built with the following technologies.

* [Javascript](https://golang.org/)
* [React](https://www.mysql.com/)
* [HTML5](https://lenguajehtml.com/)
* [CSS3](https://lenguajecss.com/)

## Getting Started

### Prerequisites
Have Go, React and Docker installed.

### local installation.

Once the repository is cloned: ``` git clone https://github.com/epg01/PruebaTecnica ```

We proceed to execute our docker compose that is located in the root of our folder called PruebaTecnica

 ``` sudo docker-compose up -d ```

then we execute the  ``` sudo docker-compose ps ``` command to be able to see if the containers are mounted correctly and without any coming out.
It should appear something like this

| Name           | Command                         |  State                 | Ports                                                 |
| :---           |     :---:                       |          -----         |:---                                                   |
| back           |  sh -C while true; do sleep ... | up                     | 0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp  |
| front          |  docker-entrypoint.sh /bin/ ... | up                     | 0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp  |
| mysqlDB        |  docker-entrypoint.sh mysql     | up                     | 0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp  |

If all our containers have the **Status** as Up, it is because they were created successfully 💙
Then we have to proceed to manually start our server in the back container, we enter our container **back** writing the following command

 ``` sudo docker-compose exec -it backend bash ```
 
 once entered our **back** container, we execute the binary file that was generated when the **back** container was created, executing the following command.
 
 ``` ./Back-End ```
 
Where if it runs successfully (how it should be if all of our containers ran successfully)

 ``` Ouput-
Server listening on port = 8000
 ```
 
 Finally we can open our browser of preference by typing the following URL.
 
  ``` htpp://localhost:3000/```
  
And finally we have our fully functional CRUD API

### Project mounted on a remote server.
You can also choose to look at the project at the following URL

 ``` http://104.156.246.116:3000/ ```
    
## Contact

Your Name - [@SixTanDeveloper](https://twitter.com/SixTanDeveloper) - sixtandev@gmail.com

Project Link: [Technical test](https://github.com/epg01/PruebaTecnica)
