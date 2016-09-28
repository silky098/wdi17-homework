require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :movieform
end

get '/movieanswer' do

  @title = params[:movie]
  @url = "http://omdbapi.com/?s=#{ @title }"
  movie_data = HTTParty.get @url
  #@movieurl = "http://omdbapi.com/?i=#{ @imdbID }"
  # @poster = movie_data[ "Poster" ]
  #
  # @runtime = movie_data[ "Runtime" ]
  # @released = movie_data[ "Released" ]
  # @year = movie_data[ "Year" ]

  @results = movie_data["Search"]

erb :movieanswer

end


get '/movietable' do

  current = request.fullpath
  @imdbID = current.to_s.split(//).flatten.last(9).join
  # <a href="/movietable?movie=<%=movie["imdbID"]%>">
  @newurl = "http://omdbapi.com/?i=<%=@imdbID%>"
  movie_data = HTTParty.get @newurl
  @title = movie_data["Title"]

  @poster = movie_data[ "Poster" ]
  #
  @runtime = movie_data[ "Runtime" ]
  @released = movie_data[ "Released" ]
  @year = movie_data[ "Year" ]

  @results = movie_data["Search"]

erb :movietable

end
