json.extract! patient, :id, :firstname, :lastname, :age, :dob, :gender, :phone, :free_text, :created_at, :updated_at
json.url patient_url(patient, format: :json)
