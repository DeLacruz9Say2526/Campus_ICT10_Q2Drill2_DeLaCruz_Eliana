from pyscript import document, display



def name_finder(e):
    document.getElementById('result').innerHTML = ' '
    last_name = document.getElementById('surname').value.lower().strip()
    first_name = document.getElementById('fname').value.lower().strip()
    candidates_name = first_name + " " + last_name

    candidate_list = ['keane pacaña', 'princess sagum', 'eliana de la cruz', 'frances torculas', 'katherine peñas', 'jacob mendoza']
    candidate_checker = candidates_name in candidate_list

    display_message = (f'Sorry {candidates_name}, your name is not on the list.', f'Congratulations {candidates_name}! You are now part of the ICT club.')

    display(display_message[candidate_checker], target='result', append=False )
