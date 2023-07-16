# How to set up a subdomain branch and then put it online using Netlify.

In order to use Github as a repository for our various websites on different subdomains we need to make use of the 'branches' function. To make a new branch using github.com:
1. You need to logged into your account on the website and then find the space.extrapractice.space respository.
2. Then click on the branches dropdown menu at the top of the repository and start typing in the name of your new repository (try to keep it to one word) and then click on create branch.
3. You'll now have a duplicate of the main branch so to make it into a new branch, you can delete all folders and files within that repository and add in the code for the website that you've made or begin coding into that folder.

Once you've got to a stage that you want to see the website online at the extrapractice.space website, you'll need to create a subdomain via a service called Netlify. To do this:
1. First go to netlify.com and sign in with the login details that can be found in our shared drive.
2. On the "Team Overview" page, find the "Sites" section. Click on the dropdown menu that says "Add new site" and select the "import and existing project option.
3. You'll get to a page that says "Import an existing project from a Git repository", at the bottom click on the "Github" button.
4. A window will pop up asking you to pick a repository. At first it will give you the option to pick a repository from the 'benjaminearl' account, but if you click on this it will give you the option to switch accounts to Extra-Practice-Code. Select this account and then find the "space.extrapractice.space" repository.
5. You will now have the option to choose a "Branch to deploy". Click on this dropdown menu and select the new branch that you made on github.
6. Scroll to the bottom of the page and click on "Deploy Site". This will put the code from that repository onto a Netlify server and make it accessible via a strange url. In the next stage we will add a custom URL.

In order to add a custom URL, we need to access the DNS settings of extrapractice.space. The domain is registered at a service called Namecheap.com. To access the domain settings:
1. Go to namecheap.com and login with the details that can be found in our shared drive.
2. If you are on the Dashboard, click the "manage" button next to the extrapractice.space domain
3. Go to the 'Advanced DNS' tab.
4. Click the 'add new record' button and select a CNAME record from the dropdown menu. Type in the subdomain name in the area that says 'Host' and add the strange URL from Netlify in the 'IP Address' section.
5. It can take up to 24 hours until the domain is connected with the netlify server, but most of the time it is quicker. You can check after a few minutes if they are linked.
6. If they are connected then you can code away! Any changes you make to the Github repository branch will automatically set off a deploy action on Netlify which will update the web page.


# space.extrapractice.space
The new and improved xp website

gijs.extrapractice.space   
manifesto.extrapractice.space  
crits.extrapractice.space  
reviews.extrapractice.space of our home or others work  
cinema.extrapractice.space loop of all video work  
board.extrapractice.space – director mode  
wanted.extrapractice.space – things and people  
like.extrapractice.space  
break.extrapractice.space  
found.extrapractice.space  
scary.extrapractice.space  

ben.extrapractice.space  
documents  
etherpad  
finance  
mixtape  
friends  
activity  
garden  

emma.extrapractive.space  
news.extrapractive.space  
here.extrapractive.space checking in and out  
lunch.extrapractive.space  
curriculum.extrapractive.space – outside people to book a coffee appointment  
meet.extrapractive.space  
curriculum  
jam.extrapractive.space –   
residency.extrapractive.space – web a residency  
memory – random xp memories. like photos on iphone. everyone can upload cute poetic message  
scanner.extrapractive.space – everything?  
evidence.extrapractive.space – for the future detective  
quotes.extrapractive.space –  

kirsten.extrapractive.space  
library.extrapractive.space – possibility of borrowing. in or out  
window.extrapractive.space  
guest.extrapractive.space –   
shop.extrapractive.space – a garage sale  
status.extrapractive.space – what you are working on at the moment  
services.extrapractive.space –   
