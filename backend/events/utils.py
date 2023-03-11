from django.core.mail import EmailMessage

class Util:
	@staticmethod
	def send_email(data):
		email = EmailMessage(subject = data['subject'], body = data['email_body'], to = [data['to']])
		email.send() 

def send_event_mail(data, user, type, creator=0):
	event_name = data['name']
	date = data['date']
	time = data['time']
	venue = data['venue']
	duration = data['duration']

	if type=='not creator':
		entry = {'email_body': f'Hello {user.name}! This is your registration confirmation for the event "{event_name}" by {creator} scheduled on {date}, {time} at {venue}. It will be a {duration} long event. Hope you enjoy the event :)', 'subject':f'Registration successful for {event_name}', 'to' : f'{user.email}' } 
		Util.send_email(entry)
	elif type=='creator':
		entry = {'email_body': f'Hello {creator.name}! This is to inform you that {user.name} (LensFolio user) has registered to your event - "{event_name}", which is scheduled on {date}, {time} at {venue}. Hope you have a successful event :)', 'subject':f'New registration for {event_name}', 'to' : f'{creator.email}' } 
		Util.send_email(entry)
	